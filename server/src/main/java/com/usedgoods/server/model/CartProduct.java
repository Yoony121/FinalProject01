package com.usedgoods.server.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Column;

@Data
@NoArgsConstructor
@Slf4j
public class CartProduct {
    private Long cartId;
    private Long productId;
    private String productName;
    private float price;
    private float subTotal;
    private int productCount;
    private String shortDescription;
    private String image;
    private String category;
    private Long sellerId;

    public CartProduct(Cart cart, Product product) {
        this.cartId = cart.getId();
        this.productId = cart.getProductId();
        this.productName = product.getProductName();
        this.price = product.getPrice();
        this.subTotal = this.price * cart.getProductQuantity();
        this.category = product.getCategory();
        this.productCount = cart.getProductQuantity();
        this.shortDescription = product.getShortDescription();
        this.image = product.getImage();
        this.sellerId = product.getSellerId();
    }
}
