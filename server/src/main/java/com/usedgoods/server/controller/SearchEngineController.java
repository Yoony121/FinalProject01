package com.usedgoods.server.controller;

import com.usedgoods.server.model.Product;
import com.usedgoods.server.payload.SearchRequest;
import com.usedgoods.server.service.SearchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/search")
@RequiredArgsConstructor
@Slf4j
public class SearchEngineController {

    private final SearchService searchService;

    @PostMapping
    public ResponseEntity<?> searchWithDistance(@RequestBody SearchRequest request) {
        List<Product> products = searchService.searchWithKeywordsAndDistance(request);
        return ResponseEntity.ok(products);
    }

    @PostMapping(path = "/no-geo")
    public ResponseEntity<?> searchWithoutDistance(@RequestBody SearchRequest request) {
        List<Product> products = searchService.searchWithKeywords(request.getKeywords());
        return ResponseEntity.ok(products);
    }
}
