package com.usedgoods.server.service;

import com.usedgoods.server.model.Cart;

import java.util.List;

public interface CartService {
    public List<Cart> getActiveSelectedProductsByCustomerId(Long customerId);
    public Cart saveProductToCart(Cart cart);
    public Cart updateCartByCustomerIdAndProductId(Long customerId, Long productId);
    public void deleteCartById(Long cartId);
}
