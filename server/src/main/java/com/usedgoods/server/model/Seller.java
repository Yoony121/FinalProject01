package com.usedgoods.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "sellers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "password")
    private String password;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "street")
    private String street;
    @Column(name = "city")
    private String city;
    @Column(name = "state")
    private String state;
    @Column(name = "country")
    private String country;
    @Column(name = "zip_code")
    private String zipCode;
    @Column(name = "email_address")
    private String emailAddress;
    @Column(name = "phone_number")
    private String phoneNumber;

    public Seller(String firstName, String lastName, String street, String city, String state, String country, String zipCode, String emailAddress, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.state =state;
        this.country = country;
        this.zipCode = zipCode;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
    }

    public Seller(String userName, String password, String emailAddress) {
        this.userName = userName;
        this.password = password;
        this.emailAddress = emailAddress;
    }
}
