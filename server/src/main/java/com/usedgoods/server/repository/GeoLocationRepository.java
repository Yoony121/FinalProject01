package com.usedgoods.server.repository;

import com.usedgoods.server.model.GeoLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GeoLocationRepository extends JpaRepository<GeoLocation, Long> {
    public GeoLocation getGeoLocationBySellerId(Long sellerId);
}
