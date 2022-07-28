package com.usedgoods.server.repository;

import com.usedgoods.server.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
    Seller findSellerByEmailAddress(String email);
    Seller findSellerByPhoneNumber(String phoneNumber);
    Seller findSellerByUserName (String userName);
}
