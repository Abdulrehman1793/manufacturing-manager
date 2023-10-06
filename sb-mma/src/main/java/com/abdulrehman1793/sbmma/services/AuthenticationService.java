package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.auth.AuthenticationRequest;
import com.abdulrehman1793.sbmma.web.model.auth.AuthenticationResponse;
import com.abdulrehman1793.sbmma.web.model.auth.RegisterRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
