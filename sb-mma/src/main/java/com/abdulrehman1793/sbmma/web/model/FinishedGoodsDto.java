package com.abdulrehman1793.sbmma.web.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder(toBuilder = true)
public class FinishedGoodsDto implements Serializable {
    private int id;
    @NotBlank
    @Size(max = 50)
    private String name;
    private String type;
    @Size(max = 500)
    private String description;
    private Integer batchQty;
    private Double salesPrice;
    private Double batchCost;
    private Double itemCost;
    private Double itemProfit;
    private Integer qtyOnHand;
}