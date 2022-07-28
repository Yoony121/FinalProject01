package com.usedgoods.server.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@ToString
public class LoginRequest {
    @NotBlank
    private String userName;
    @NotBlank
    private String password;
}
