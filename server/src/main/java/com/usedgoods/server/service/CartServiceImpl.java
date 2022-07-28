package com.usedgoods.server.service;

import com.usedgoods.server.model.Cart;
import com.usedgoods.server.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    @Override
    public List<Cart> getActiveSelectedProductsByCustomerId(Long customerId) {
        return cartRepository.getCartsByCustomerIdAndRemovedEquals(customerId, 0);
    }

    @Override
    public Cart saveProductToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public Cart updateCartByCustomerIdAndProductId(Long customerId, Long productId) {
        List<Cart> carts = cartRepository.getCartsByCustomerIdAndRemovedEquals(customerId, 0);
        for (Cart cart : carts) {
            if (cart.getProductId() == productId) {
                cart.setProductQuantity(cart.getProductQuantity() + 1);
                return cartRepository.save(cart);
            }
        }
        Cart cart = new Cart();
        cart.setCustomerId(customerId);
        cart.setProductId(productId);
        cart.setProductQuantity(1);
        cart.setRemoved(0);
        return cartRepository.save(cart);
    }

    @Override
    public void deleteCartById(Long cartId) {
        cartRepository.deleteById(cartId);
    }
}
