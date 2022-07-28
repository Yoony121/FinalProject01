package com.usedgoods.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "payment_methods")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "card_type")
    private String cardType;
    @Column(name = "card_number")
    private String card_number;
    @Column(name = "expiration")
    private String expiration;
    @Column(name = "cvv")
    private String cvv;
    @Column(name = "customer_id")
    private Long customerId;
    @Column(name = "default_payment")
    private int defaultPayment;
}
