package com.abdulrehman1793.sbmma.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class RawGoods {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, unique = true, nullable = false)
    private String name;

    @ManyToOne
    private ProductType type;

    @Column(length = 20, unique = true, nullable = false)
    private String upc;

    @Builder.Default
    private int reorderQty = 0;

    @Builder.Default
    private int minQty = 0;

    @Builder.Default
    private int qtyOnHand = 0;

    @Builder.Default
    private double amount = 0;

    @Builder.Default
    private int purchaseUnitQty = 0;

    @ManyToOne
    private UnitOfMeasure uom;

    @ManyToOne
    private PurchaseUnit purchaseUnit;

    @ManyToOne
    private Image image;
}
