package com.abdulrehman1793.sbmma.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class FinishedGoods {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, unique = true, nullable = false)
    private String name;

    @ManyToOne
    private ProductType type;

    @Column(length = 500, nullable = false)
    private String description;

    @Builder.Default
    private int batchQty = 0;

    @Builder.Default
    private double salesPrice = 0.00;

    @Builder.Default
    private double batchCost = 0.00;

    @Builder.Default
    private double itemCost = 0.00;

    @Builder.Default
    private double itemProfit = 0.00;

    @Builder.Default
    private int qtyOnHand = 0;

    @ManyToOne
    private Image image;
}
