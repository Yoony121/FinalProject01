package com.usedgoods.server.service;

import com.usedgoods.server.model.Customer;

import java.util.List;

public interface CustomerService {
    Customer saveCustomer(Customer customer);
    Customer getCustomerByEmail(String email);
    Customer getCustomerByPhoneNumber(String phoneNumber);
    List<Customer> getCustomers();
    Customer getCustomerById(Long id);
    Customer updateCustomer(Long id, Customer customer);
    Long getIdByUserName(String userName);
}
