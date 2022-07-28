package com.usedgoods.server.payload;

import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@ToString
public class JwtResponse {
    private String accessToken;
    private String type = "Bearer";
    private Long id;
    private String userName;
    private String emailAddress;
    private List<String> roles;

    public JwtResponse(String accessToken, Long id, String userName, String emailAddress, List<String> roles) {
        this.accessToken = accessToken;
        this.id = id;
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.roles = roles;
    }
}
