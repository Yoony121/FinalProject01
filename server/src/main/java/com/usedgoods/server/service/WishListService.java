package com.usedgoods.server.service;

import com.usedgoods.server.model.Cart;
import com.usedgoods.server.model.WishList;

import java.util.List;

public interface WishListService {
    public List<WishList> getActiveSelectedProductsByCustomerId(Long customerId);
    public WishList saveProductToWishList(WishList wishList);
    public WishList updateWishListByCustomerIdAndProductId(Long customerId, Long productId);
    public void deleteWishListById(Long wishListId);
}
