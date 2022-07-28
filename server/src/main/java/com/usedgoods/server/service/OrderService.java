package com.usedgoods.server.service;

import com.usedgoods.server.model.Order;

import java.util.List;

public interface OrderService {
    List<Order> getOrdersOfCustomer(Long customerId);
    Order saveOrder(Order order);
}
