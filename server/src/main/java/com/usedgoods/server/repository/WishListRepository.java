package com.usedgoods.server.repository;

import com.usedgoods.server.model.WishList;
import com.usedgoods.server.service.WishListService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishListRepository extends JpaRepository<WishList, Long> {
    List<WishList> getWishListsByCustomerIdAndRemovedEquals(Long customerId, int isRemoved);
}
