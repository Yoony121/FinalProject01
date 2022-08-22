package com.usedgoods.server.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@ToString
public class SearchRequest {
    @NotBlank
    private String keywords;
    @NotBlank
    private int distance;
    @NotBlank
    private float latitude;
    @NotBlank
    private float longitude;
}
