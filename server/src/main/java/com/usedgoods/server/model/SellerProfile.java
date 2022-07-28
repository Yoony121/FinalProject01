package com.usedgoods.server.model;

import lombok.Data;
import lombok.ToString;
import net.bytebuddy.NamingStrategy;

@Data
@ToString
public class SellerProfile {
    private String firstName;
    private String lastName;
    private String street;
    private String city;
    private String state;
    private String country;
    private String zipCode;
    private String emailAddress;
    private String phoneNumber;
    private String bankName;
    private String accountNumber;
    private String routingNumber;

    public Seller getSeller() {
        return new Seller(firstName, lastName, street, city, state, country, zipCode, emailAddress, phoneNumber);
    }

    public BankAccount getBankAccount() {
        return new BankAccount(bankName, accountNumber, routingNumber);
    }
}
