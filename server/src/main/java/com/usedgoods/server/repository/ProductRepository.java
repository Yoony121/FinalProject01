package com.usedgoods.server.repository;

import com.usedgoods.server.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findTop8ByOrderByCommentsCountDesc();
    List<Product> findTop4ByOrderByCommentsCountDesc();
    List<Product> findTop3ByOrderByCommentsCountDesc();
}
