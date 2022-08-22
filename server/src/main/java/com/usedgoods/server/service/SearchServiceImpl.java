package com.usedgoods.server.service;

import com.usedgoods.server.model.GeoCoordinates;
import com.usedgoods.server.model.GeoLocation;
import com.usedgoods.server.model.Product;
import com.usedgoods.server.payload.SearchRequest;
import com.usedgoods.server.repository.GeoLocationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class SearchServiceImpl implements SearchService {

    private final GeoLocationRepository geoLocationRepository;

    private final GeoLocationService geoLocationService;

    private final ProductService productService;

    private static final List<String> KEYWORDS_TO_BE_REMOVED = new ArrayList<>() {
        {
            add("is");
            add("are");
            add("and");
            add("or");
            add("a");
            add("an");
            add("this");
            add("that");
            add("which");
            add("what");
            add("the");
        }
    };

    @Override
    public List<Product> searchWithKeywordsAndDistance(SearchRequest request) {
        List<Product> productsByKeywords = searchWithKeywords(request.getKeywords());
        GeoCoordinates customerGeoCoordinate = new GeoCoordinates(request.getLatitude(), request.getLongitude());
        List<Product> products = productsByKeywords.stream().filter(product -> {
            GeoLocation sellerGeoLocation = geoLocationRepository.getGeoLocationBySellerId(product.getSellerId());
            GeoCoordinates sellerGeoCoordinates = new GeoCoordinates(sellerGeoLocation);
            return geoLocationService.getDistanceBetweenGeoLocations(customerGeoCoordinate, sellerGeoCoordinates) <= request.getDistance();
        }).collect(Collectors.toList());
        return products;
    }

    @Override
    public List<Product> searchWithKeywords(String keywords) {
        List<String> listOfKeywords = new ArrayList<>();
        for (String s : keywords.split(" ")) {
            if (KEYWORDS_TO_BE_REMOVED.contains(s.toLowerCase())) {
                continue;
            }
            listOfKeywords.add(s.toLowerCase());
        }
        List<Product> searchResults = new ArrayList<>();
        for (String keyword : listOfKeywords) {
            List<Product> currentResult = productService.searchProductsByKeyword(keyword);
            currentResult.stream().filter(product -> !searchResults.contains(product)).forEach(product -> searchResults.add(product));
        }
        for (Product p : searchResults) {
            log.info(p.toString());
        }
        return searchResults;
    }
}
