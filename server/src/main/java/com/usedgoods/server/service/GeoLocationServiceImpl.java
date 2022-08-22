package com.usedgoods.server.service;

import com.usedgoods.server.model.GeoCoordinates;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class GeoLocationServiceImpl implements GeoLocationService {
    @Override
    public float getDistanceBetweenGeoLocations(GeoCoordinates coord1, GeoCoordinates coord2) {
        float theta = coord1.getLongitude() - coord2.getLongitude();
        float distance = (float) (Math.sin(deg2rad(coord1.getLatitude())) * Math.sin(deg2rad(coord2.getLatitude())) +
                Math.cos(deg2rad(coord1.getLatitude())) * Math.cos(deg2rad(coord2.getLatitude())) * Math.cos(deg2rad(theta)));
        distance = (float) Math.acos(distance);
        distance = rad2deg(distance);
        distance = (float) (distance * 60.0 * 1.1515 * 1.609344);
        return distance;
    }

    private float deg2rad(float deg) {
        return (float) (deg * Math.PI / 180.0);
    }

    private float rad2deg(float rad) {
        return (float) (rad * 180.0 / Math.PI);
    }
}
