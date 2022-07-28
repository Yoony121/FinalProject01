package com.usedgoods.server.repository;

import com.usedgoods.server.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> getOrdersByCustomerIdOrderByTime(Long customerId);
}
