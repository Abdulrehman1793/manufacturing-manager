package com.abdulrehman1793.sbmma.web.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder(toBuilder = true)
public class RawGoodsDto implements Serializable {
    private int id;

    @NotBlank
    @Size(max = 50)
    private String name;
    @NotBlank
    @Size(max = 20)
    private String upc;
    private Integer reorderQty;
    private Integer minQty;
    private Integer qtyOnHand;
    private Double amount;
    private Integer purchaseUnitQty;
    private String type;
    private String uom;
    private String purchaseUnit;
}