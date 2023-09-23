package com.abdulrehman1793.sbmma.web.model;

import com.abdulrehman1793.sbmma.annotation.PersonUniqueEmail;
import com.abdulrehman1793.sbmma.model.enums.PersonType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class PersonDto {
    private int id;

    @NotBlank(message = "Name is required")
    @Size(min = 5, max = 100)
    private String name;

    @NotBlank(message = "Phone is required")
    private String phone;

    @NotBlank(message = "Email is required")
    @PersonUniqueEmail
    private String email;

    @NotBlank(message = "Address is required")
    @Size(min = 10, max = 200)
    private String address;

    private String city;

    private String state;

    private int zip;

    private PersonType type;
}
