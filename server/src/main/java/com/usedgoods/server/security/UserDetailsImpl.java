package com.usedgoods.server.security;

import com.usedgoods.server.model.Customer;
import com.usedgoods.server.model.Seller;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@AllArgsConstructor
@EqualsAndHashCode
public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;
    private Long id;
    private String userName;
    private String emailAddress;
    @JsonIgnore
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public static UserDetailsImpl buildWithCustomer(Customer customer) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>() {
            {
                add(new SimpleGrantedAuthority("CUSTOMER"));
            }
        };
        return new UserDetailsImpl(customer.getId(), customer.getUserName(), customer.getEmailAddress(), customer.getPassword(), authorities);
    }

    public static UserDetailsImpl buildWithSeller(Seller seller) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>() {
            {
                add(new SimpleGrantedAuthority("SELLER"));
            }
        };
        return new UserDetailsImpl(seller.getId(), seller.getUserName(), seller.getEmailAddress(), seller.getPassword(), authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
