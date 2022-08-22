package com.usedgoods.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "geo_locations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GeoLocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "seller_id")
    private Long sellerId;
    @Column(name = "latitude")
    private float latitude;
    @Column(name = "longitude")
    private float longitude;
}
