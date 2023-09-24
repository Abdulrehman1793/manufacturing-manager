package com.abdulrehman1793.sbmma.web.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class PurchaseUnitDto {
    private String id;
    @NotBlank(message = "Name is required")
    private String name;
}
