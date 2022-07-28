package com.usedgoods.server.service;

import com.usedgoods.server.model.Product;
import com.usedgoods.server.repository.OrderRepository;
import com.usedgoods.server.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;
    private final CommentService commentService;

    private final int recommendedCount = 10;
    private final int mainPageCount = 3;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).get();
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getRecommendedProducts() {
        return productRepository.findTop4ByOrderByCommentsCountDesc();
    }

    @Override
    public List<Product> getMainPageProducts() {
        return productRepository.findTop3ByOrderByCommentsCountDesc();
    }

    @Override
    public List<Product> getTrendingProducts() {
        return productRepository.findTop8ByOrderByCommentsCountDesc();
    }
}
