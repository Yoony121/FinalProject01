package com.usedgoods.server.controller;

import com.usedgoods.server.exception.AlreadyExistException;
import com.usedgoods.server.model.Customer;
import com.usedgoods.server.payload.MessageResponse;
import com.usedgoods.server.security.JwtUtils;
import com.usedgoods.server.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.AbstractList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/customer")
@RequiredArgsConstructor
@Slf4j
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping
    public ResponseEntity<List<Customer>> getCustomers() {
        return ResponseEntity.ok().body(customerService.getCustomers());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getCustomer(@PathVariable Long id, @RequestHeader("Authorization") String accessToken) {
        if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
        }
        return ResponseEntity.ok(customerService.getCustomerById(id));
    }

    // create employee rest api
    @PostMapping(path = "/update/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable Long id, @RequestBody Customer customer, @RequestHeader("Authorization") String accessToken) {
        log.info("ID:" + id);
        log.info(customer.toString());
        if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
        }
        Customer updated = null;
        String errorMessage = null;
        try {
            updated = customerService.updateCustomer(id, customer);
        } catch (Exception ex) {
            log.warn("Update customer failed with message: " + ex.getMessage());
            errorMessage = ex.getMessage();
        }
        if (null == updated) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(updated);
        }
    }

}