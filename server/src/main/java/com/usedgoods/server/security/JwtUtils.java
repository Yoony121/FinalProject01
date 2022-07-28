package com.usedgoods.server.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;

import java.util.Date;

@Component
@Slf4j
public class JwtUtils {
    @Value("${usedgoods.app.jwtSecret}")
    private String jwtSecret;
    @Value("${usedgoods.app.jwtExpiration}")
    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication) {
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();
        return Jwts.builder().setSubject(userPrincipal.getUsername()).setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS256, jwtSecret).compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken) {
        log.info(authToken);
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature: " + ex.getMessage());
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token: " + ex.getMessage());
        } catch (ExpiredJwtException ex) {
            log.error("JWT token is expired: " + ex.getMessage());
        } catch (UnsupportedJwtException ex) {
            log.error("JWT token is unsupported: " + ex.getMessage());
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty: " + ex.getMessage());
        }
        return false;
    }
}
