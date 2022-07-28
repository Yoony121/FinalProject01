package com.usedgoods.server.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Data
@NoArgsConstructor
@Slf4j
public class WishListProduct {
    private Long wishListId;
    private Long productId;
    private String productName;
    private String image;

    public WishListProduct(WishList wishList, Product product) {
        this.wishListId = wishList.getId();
        this.productId = wishList.getProductId();
        this.productName = product.getProductName();
        this.image = product.getImage();
    }
}
