package com.usedgoods.server.service;

import com.usedgoods.server.exception.AlreadyExistException;
import com.usedgoods.server.model.Customer;
import com.usedgoods.server.model.Seller;
import com.usedgoods.server.repository.SellerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class SellerServiceImpl implements SellerService {
    private final SellerRepository sellerRepository;

    @Override
    public Seller saveSeller(Seller seller) {
        if (sellerRepository.findSellerByEmailAddress(seller.getEmailAddress()) != null) {
            log.info("Customer email address already exist.");
            throw new AlreadyExistException("The email address is already registered.");
        }
        return sellerRepository.save(seller);
    }

    @Override
    public Seller getSellerByEmail(String email) {
        return sellerRepository.findSellerByEmailAddress(email);
    }

    @Override
    public Seller getSellerByPhoneNumber(String phoneNumber) {
        return sellerRepository.findSellerByPhoneNumber(phoneNumber);
    }

    @Override
    public Seller getSellerById(Long id) {
        return sellerRepository.findById(id).orElse(null);
    }

    @Override
    public List<Seller> getSellers() {
        List<Seller> sellers = sellerRepository.findAll();
        log.info("Number of sellers: " + sellers.size());
//        for (Seller seller : sellers) {
//            log.info(seller.toString());
//        }
        return sellers;
    }

    @Override
    public void deleteSellerById(Long id) {
        sellerRepository.deleteById(id);
    }

    @Override
    public Seller updateSeller(Long id, Seller seller) {
        Seller existing = sellerRepository.findById(id).get();
        existing.setFirstName(seller.getFirstName());
        existing.setLastName(seller.getLastName());
        existing.setStreet(seller.getStreet());
        existing.setCity(seller.getCity());
        existing.setState(seller.getState());
        existing.setCountry(seller.getCountry());
        existing.setZipCode(seller.getZipCode());
        existing.setPhoneNumber(seller.getPhoneNumber());
        sellerRepository.save(existing);
        return existing;
    }

}
