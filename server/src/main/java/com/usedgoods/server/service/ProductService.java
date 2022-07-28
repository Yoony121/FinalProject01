package com.usedgoods.server.service;

import com.usedgoods.server.model.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);
    Product getProductById(Long id);

    List<Product> getProducts();

    List<Product> getRecommendedProducts();

    List<Product> getMainPageProducts();

    List<Product> getTrendingProducts();
}
