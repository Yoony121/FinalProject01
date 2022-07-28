package com.usedgoods.server.controller;

import com.usedgoods.server.exception.AlreadyExistException;
import com.usedgoods.server.model.BankAccount;
import com.usedgoods.server.model.Customer;
import com.usedgoods.server.model.Seller;
import com.usedgoods.server.model.SellerProfile;
import com.usedgoods.server.payload.MessageResponse;
import com.usedgoods.server.security.JwtUtils;
import com.usedgoods.server.service.BankAccountService;
import com.usedgoods.server.service.CustomerService;
import com.usedgoods.server.service.SellerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/seller")
@RequiredArgsConstructor
@Slf4j
public class SellerController {

    private final SellerService sellerService;
    private final BankAccountService bankAccountService;

    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping
    public ResponseEntity<List<Seller>> getSellers() {
        return ResponseEntity.ok().body(sellerService.getSellers());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getSeller(@PathVariable Long id, @RequestHeader("Authorization") String accessToken) {
        if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
        }
        return ResponseEntity.ok(sellerService.getSellerById(id));
    }

    // create employee rest api
    @PostMapping(path = "/update/{id}")
    public ResponseEntity<?> updateSeller(@PathVariable Long id, @RequestBody SellerProfile sellerProfile, @RequestHeader("Authorization") String accessToken) {
        if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
        }
        Seller updatedSeller = null;
        BankAccount updatedBankAccount = null;
        String errorMessage = null;
        try {
            Seller seller = sellerProfile.getSeller();
            BankAccount bankAccount = sellerProfile.getBankAccount();
            updatedSeller = sellerService.updateSeller(id, seller);
            if (updatedSeller != null) {
                bankAccount.setSellerId(updatedSeller.getId());
                bankAccount.setDefaultAccount(1);
                updatedBankAccount = bankAccountService.saveBankAccount(bankAccount);
            }
        } catch (Exception ex) {
            log.warn("Register seller failed with message: " + ex.getMessage());
            errorMessage = ex.getMessage();
        }
        if (null == updatedSeller || null == updatedBankAccount) {
            if (null != updatedSeller) {
                // Register bank account failed, need to roll back for stored seller
                sellerService.deleteSellerById(updatedSeller.getId());
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(updatedSeller);
        }
    }
}
