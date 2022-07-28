package com.usedgoods.server.controller;

import com.usedgoods.server.model.Cart;
import com.usedgoods.server.model.CartProduct;
import com.usedgoods.server.model.Product;
import com.usedgoods.server.payload.MessageResponse;
import com.usedgoods.server.security.JwtUtils;
import com.usedgoods.server.service.CartService;
import com.usedgoods.server.service.CustomerService;
import com.usedgoods.server.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/cart")
@RequiredArgsConstructor
@Slf4j
public class CartController {
    private final CartService cartService;
    private final ProductService productService;
    private final CustomerService customerService;
    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping
    public ResponseEntity<?> getCartProductsForCustomer(@RequestHeader("Authorization") String accessToken) {
        if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
        }
        String userName = jwtUtils.getUserNameFromJwtToken(accessToken.substring(7));
        Long customerId = customerService.getIdByUserName(userName);
        List<Cart> carts = cartService.getActiveSelectedProductsByCustomerId(customerId);
        List<CartProduct> cartProducts = new ArrayList<>();
        for (Cart cart : carts) {
            Long productId = cart.getProductId();
            Product product = productService.getProductById(productId);
            cartProducts.add(new CartProduct(cart, product));
        }
        return ResponseEntity.ok(cartProducts);
    }

    @PostMapping(path = "/{productId}")
    public ResponseEntity<?> addProductToCartForCustomer(@PathVariable Long productId, @RequestHeader("Authorization") String accessToken) {
        try {
            if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
            }
            String userName = jwtUtils.getUserNameFromJwtToken(accessToken.substring(7));
            Long customerId = customerService.getIdByUserName(userName);
            return ResponseEntity.ok(cartService.updateCartByCustomerIdAndProductId(customerId, productId));
        } catch (Exception ex) {
            log.info(ex.getMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request");

    }

    @DeleteMapping(path = "/{cartId}")
    public ResponseEntity<?> removeProductFromCartForCustomer(@PathVariable Long cartId, @RequestHeader("Authorization") String accessToken) {
        if (!jwtUtils.validateJwtToken(accessToken.substring(7))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Invalid access token"));
        }
        cartService.deleteCartById(cartId);
        return ResponseEntity.ok("Remove product successfully.");
    }
}
