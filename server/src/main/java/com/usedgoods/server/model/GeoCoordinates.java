package com.usedgoods.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class GeoCoordinates {
    private float latitude;
    private float longitude;

    public GeoCoordinates(GeoLocation geoLocation) {
        this.latitude = geoLocation.getLatitude();
        this.longitude = geoLocation.getLongitude();
    }
}
