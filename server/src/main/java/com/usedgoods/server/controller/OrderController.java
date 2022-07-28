package com.usedgoods.server.controller;

import com.usedgoods.server.model.Order;
import com.usedgoods.server.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/order")
@RequiredArgsConstructor
@Slf4j
public class OrderController {
    private final OrderService orderService;
    @GetMapping(path = "/{id}")
    public ResponseEntity<List<Order>> getOrdersOfCurrentCustomer(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.getOrdersOfCustomer(id));
    }

    @PostMapping
    public ResponseEntity<Order> addOrder(@RequestBody Order order) {
        return ResponseEntity.ok(orderService.saveOrder(order));
    }
}
