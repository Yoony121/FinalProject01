package com.usedgoods.server.service;

import com.usedgoods.server.model.Order;
import com.usedgoods.server.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    @Override
    public List<Order> getOrdersOfCustomer(Long customerId) {
        return orderRepository.getOrdersByCustomerIdOrderByTime(customerId);
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}
