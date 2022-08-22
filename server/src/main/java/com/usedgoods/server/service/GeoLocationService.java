package com.usedgoods.server.service;

import com.usedgoods.server.model.GeoCoordinates;

public interface GeoLocationService {
    public float getDistanceBetweenGeoLocations(GeoCoordinates coord1, GeoCoordinates coord2);
}
