package com.usedgoods.server.repository;

import com.usedgoods.server.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findCustomerByEmailAddress(String email);
    Customer findCustomerByPhoneNumber(String phoneNumber);
    Customer findCustomerByUserName(String userName);
    Customer getCustomerByUserName(String userName);
}
