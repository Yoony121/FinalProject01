package com.usedgoods.server.repository;

import com.usedgoods.server.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> getCartsByCustomerIdAndRemovedEquals(Long customerId, int isRemoved);
}
