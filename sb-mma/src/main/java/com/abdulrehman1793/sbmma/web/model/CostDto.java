package com.abdulrehman1793.sbmma.web.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class CostDto {
    private int id;
    @NotBlank()
    @Size(max = 50)
    private String name;
    @Size(max = 500)
    private String description;
    private String type;
    @Size(max = 50)
    private String costUnit;
    private double amount;
}
