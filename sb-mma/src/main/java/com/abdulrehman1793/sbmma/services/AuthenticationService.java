package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.auth.AuthenticationRequest;
import com.abdulrehman1793.sbmma.web.model.auth.AuthenticationResponse;
import com.abdulrehman1793.sbmma.web.model.auth.RegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);
}
