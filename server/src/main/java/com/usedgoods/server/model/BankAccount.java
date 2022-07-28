package com.usedgoods.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "bank_accounts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BankAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "bank_name")
    private String bankName;
    @Column(name = "account_number")
    private String accountNumber;
    @Column(name = "routing_number")
    private String routingNumber;
    @Column(name = "seller_id")
    private Long sellerId;
    @Column(name = "default_account")
    private int defaultAccount;

    public BankAccount(String bankName, String accountNumber, String routingNumber) {
        this.bankName = bankName;
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
    }
}
