package com.usedgoods.server.service;

import com.usedgoods.server.model.Customer;
import com.usedgoods.server.model.Seller;

import java.util.List;

public interface SellerService {
    Seller saveSeller(Seller seller);
    Seller getSellerByEmail(String email);
    Seller getSellerByPhoneNumber(String phoneNumber);
    Seller getSellerById(Long id);

    List<Seller> getSellers();

    void deleteSellerById(Long id);
    Seller updateSeller(Long id, Seller seller);
}
