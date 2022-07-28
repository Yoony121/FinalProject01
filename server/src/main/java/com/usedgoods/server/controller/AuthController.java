package com.usedgoods.server.controller;

import com.usedgoods.server.model.Customer;
import com.usedgoods.server.model.Seller;
import com.usedgoods.server.payload.JwtResponse;
import com.usedgoods.server.payload.LoginRequest;
import com.usedgoods.server.payload.MessageResponse;
import com.usedgoods.server.payload.RegistrationRequest;
import com.usedgoods.server.repository.CustomerRepository;
import com.usedgoods.server.repository.SellerRepository;
import com.usedgoods.server.security.JwtUtils;
import com.usedgoods.server.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    SellerRepository sellerRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request) {
        JwtResponse response = authenticate(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/customer/registration")
    public ResponseEntity<?> registerCustomer(@Valid @RequestBody RegistrationRequest request) {
//        log.info(request.toString());
        if (checkCollision(request)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username or email is already in use!"));
        }

        // Create new customer's account
        Customer customer = new Customer(request.getUserName(),
                passwordEncoder.encode(request.getPassword()),
                request.getEmailAddress());

        customerRepository.save(customer);

        // Automatically login and return access token
        JwtResponse response = authenticate(new LoginRequest(request.getUserName(), request.getPassword()));

        return ResponseEntity.ok(response);
    }

    @PostMapping("/seller/registration")
    public ResponseEntity<?> registerSeller(@Valid @RequestBody RegistrationRequest request) {
        if (checkCollision(request)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username or email is already in use!"));
        }

        // Create new customer's account
        Seller seller = new Seller(request.getUserName(),
                passwordEncoder.encode(request.getPassword()),
                request.getEmailAddress());

        sellerRepository.save(seller);

        // Automatically login and return access token
        JwtResponse response = authenticate(new LoginRequest(request.getUserName(), request.getPassword()));

//        log.info(response.toString());

        return ResponseEntity.ok(response);
    }

    private JwtResponse authenticate(LoginRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());
            return new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmailAddress(), roles);
        } catch (Exception ex) {
            log.error("Error during authentication: " + ex);
        }
        return null;
    }

    private boolean checkCollision(RegistrationRequest request) {
        if (sellerRepository.findSellerByUserName(request.getUserName()) != null ||
                customerRepository.findCustomerByUserName(request.getUserName()) != null) {
            return true;
        }

        if (sellerRepository.findSellerByEmailAddress(request.getEmailAddress()) != null ||
                customerRepository.findCustomerByEmailAddress(request.getEmailAddress()) != null) {
            return true;
        }

        return false;
    }
}
