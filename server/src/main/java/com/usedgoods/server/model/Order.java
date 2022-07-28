package com.usedgoods.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "product_id")
    private Long productId;
    @Column(name = "price")
    private float price;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "customer_id")
    private Long customerId;
    @Column(name = "seller_id")
    private Long sellerId;
    @Column(name = "type")
    private String Type;
    @Column(name = "time")
    private Date time;
    @Column(name = "status")
    private String status;
}
