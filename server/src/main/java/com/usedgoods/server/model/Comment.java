package com.usedgoods.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "comments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "product_id")
    private Long productId;
    @Column(name = "customer_id")
    private Long customerId;
    @Column(name = "customer_name")
    private String customerName;
    @Column(name = "content")
    private String content;
    @Column(name = "time")
    private Date time;
    @Column(name = "rating")
    private int rating;
}
