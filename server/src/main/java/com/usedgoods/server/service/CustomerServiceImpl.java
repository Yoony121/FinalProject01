package com.usedgoods.server.service;

import com.usedgoods.server.exception.AlreadyExistException;
import com.usedgoods.server.model.Customer;
import com.usedgoods.server.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;

    @Override
    public Customer saveCustomer(Customer customer) {
        if (customerRepository.findCustomerByEmailAddress(customer.getEmailAddress()) != null) {
            log.info("Customer email address already exist.");
            throw new AlreadyExistException("The email address is already registered.");
        }
        return customerRepository.save(customer);
    }

    @Override
    public Customer getCustomerByEmail(String email) {
        return customerRepository.findCustomerByEmailAddress(email);
    }

    @Override
    public Customer getCustomerByPhoneNumber(String phoneNumber) {
        return customerRepository.findCustomerByPhoneNumber(phoneNumber);
    }

    @Override
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public Customer updateCustomer(Long id, Customer customer) {
        Customer existing = customerRepository.findById(id).get();
        existing.setFirstName(customer.getFirstName());
        existing.setLastName(customer.getLastName());
        existing.setStreet(customer.getStreet());
        existing.setCity(customer.getCity());
        existing.setState(customer.getState());
        existing.setCountry(customer.getCountry());
        existing.setZipCode(customer.getZipCode());
        existing.setPhoneNumber(customer.getPhoneNumber());
        customerRepository.save(existing);
        return existing;
    }

    @Override
    public Long getIdByUserName(String userName) {
        Customer customer = customerRepository.getCustomerByUserName(userName);
        return customer.getId();
    }
}
