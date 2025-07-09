package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.AuthResponse;
import com.cognizant.spring_learn.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    //@Autowired
    //private JwtUtil jwtUtil;

    @PostMapping("/authenticate")
    public AuthResponse generateToken(@RequestParam String username, @RequestParam String password) throws Exception {
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Invalid credentials", e);
        }

        // Only declare once
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
     // In AuthController.java
        String token = JwtUtil.generateToken(userDetails.getUsername());

        return new AuthResponse(token);  // Use the correct variable name
    }
}
