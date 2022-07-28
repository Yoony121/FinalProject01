package com.usedgoods.server.security;

import com.usedgoods.server.model.Customer;
import com.usedgoods.server.model.Seller;
import com.usedgoods.server.repository.CustomerRepository;
import com.usedgoods.server.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    SellerRepository sellerRepository;
    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        // Try to get seller information first
        Seller seller = sellerRepository.findSellerByUserName(userName);
        if (null == seller) {
            // Try to get customer information if seller not find
            Customer customer = customerRepository.findCustomerByUserName(userName);
            if (null == customer) {
                throw new UsernameNotFoundException("User not found with username: " + userName);
            }
            return UserDetailsImpl.buildWithCustomer(customer);
        }
        return UserDetailsImpl.buildWithSeller(seller);
    }
}
