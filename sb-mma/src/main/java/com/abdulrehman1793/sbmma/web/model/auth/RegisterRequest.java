package com.abdulrehman1793.sbmma.web.model.auth;

import com.abdulrehman1793.sbmma.model.auth.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String name;
    private String userName;
    private String email;
    private String password;
    private Role role;
}
