package com.usedgoods.server.payload;

import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@ToString
public class RegistrationRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String userName;
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
    @NotBlank
    @Size(max = 50)
    @Email
    private String emailAddress;
    private Set<String> role;

}
