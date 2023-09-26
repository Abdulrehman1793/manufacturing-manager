package com.abdulrehman1793.sbmma.web.model;

import com.abdulrehman1793.sbmma.model.enums.Type;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class ProductTypeDto {
    private String id;
    private String name;
    private String description;
    private Type type;
}
