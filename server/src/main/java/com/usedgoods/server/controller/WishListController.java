package com.usedgoods.server.controller;

import com.usedgoods.server.model.*;
import com.usedgoods.server.payload.MessageResponse;
import com.usedgoods.server.security.JwtUtils;
import com.usedgoods.server.service.CartService;
import com.usedgoods.server.service.CustomerService;
import com.usedgoods.server.service.ProductService;
import com.usedgoods.server.service.WishListService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/wishlist")
@RequiredArgsConstructor
@Slf4j
public class WishListController {
    private final WishListService wishListService;
    private final ProductService productService;
    private final CustomerService customerService;
    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping
    public ResponseEntity<?> getWishListProductsForCustomer(@RequestHeader("Authorization") String accessToken) {
        if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
        }
        String userName = jwtUtils.getUserNameFromJwtToken(accessToken.substring(7));
        Long customerId = customerService.getIdByUserName(userName);
        List<WishList> wishLists = wishListService.getActiveSelectedProductsByCustomerId(customerId);
        List<WishListProduct> wishListProducts = new ArrayList<>();
        for (WishList wishList : wishLists) {
            Long productId = wishList.getProductId();
            Product product = productService.getProductById(productId);
            wishListProducts.add(new WishListProduct(wishList, product));
        }
        return ResponseEntity.ok(wishListProducts);
    }

    @PostMapping(path = "/{productId}")
    public ResponseEntity<?> addProductToWishListForCustomer(@PathVariable Long productId, @RequestHeader("Authorization") String accessToken) {
        try {
            if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
            }
            String userName = jwtUtils.getUserNameFromJwtToken(accessToken.substring(7));
            Long customerId = customerService.getIdByUserName(userName);
            return ResponseEntity.ok(wishListService.updateWishListByCustomerIdAndProductId(customerId, productId));
        } catch (Exception ex) {
            log.info(ex.getMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request");

    }

    @DeleteMapping(path = "/{wishListId}")
    public ResponseEntity<?> removeProductFromCartForCustomer(@PathVariable Long wishListId, @RequestHeader("Authorization") String accessToken) {
        if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
        }
        wishListService.deleteWishListById(wishListId);
        return ResponseEntity.ok("Remove product successfully.");
    }
}
