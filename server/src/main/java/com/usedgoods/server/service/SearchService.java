package com.usedgoods.server.service;

import com.usedgoods.server.model.Product;
import com.usedgoods.server.payload.SearchRequest;

import java.util.List;

public interface SearchService {
    public List<Product> searchWithKeywordsAndDistance(SearchRequest request);
    public List<Product> searchWithKeywords(String keywords);
}
