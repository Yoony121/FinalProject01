package com.usedgoods.server.controller;

import com.usedgoods.server.model.Product;
import com.usedgoods.server.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;


@RestController
@RequestMapping(path = "/api/product")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping(path = "/main-page")
    public ResponseEntity<List<Product>> getMainPageProducts() {
        return ResponseEntity.ok(productService.getMainPageProducts());
    }

    @GetMapping(path = "/recommend")
    public ResponseEntity<List<Product>> getRecommendedProducts() {
        return ResponseEntity.ok(productService.getRecommendedProducts());
    }

    @GetMapping(path = "/trending")
    public ResponseEntity<List<Product>> getTrendingProducts() {
        return ResponseEntity.ok(productService.getTrendingProducts());
    }

    @PostMapping(path = "/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));

    }

}
