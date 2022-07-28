package com.usedgoods.server.service;

import com.usedgoods.server.model.Cart;
import com.usedgoods.server.model.WishList;
import com.usedgoods.server.repository.CartRepository;
import com.usedgoods.server.repository.WishListRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class WishListServiceImpl implements WishListService {
    private final WishListRepository wishListRepository;
    @Override
    public List<WishList> getActiveSelectedProductsByCustomerId(Long customerId) {
        return wishListRepository.getWishListsByCustomerIdAndRemovedEquals(customerId, 0);
    }

    @Override
    public WishList saveProductToWishList(WishList wishList) {
        return wishListRepository.save(wishList);
    }

    @Override
    public WishList updateWishListByCustomerIdAndProductId(Long customerId, Long productId) {
        List<WishList> wishLists = wishListRepository.getWishListsByCustomerIdAndRemovedEquals(customerId, 0);
        for (WishList wishList : wishLists) {
            if (wishList.getProductId() == productId) {
                return wishListRepository.save(wishList);
            }
        }
        WishList wishList = new WishList();
        wishList.setCustomerId(customerId);
        wishList.setProductId(productId);
        wishList.setRemoved(0);
        return wishListRepository.save(wishList);
    }

    @Override
    public void deleteWishListById(Long wishListId) {
        wishListRepository.deleteById(wishListId);
    }
}
