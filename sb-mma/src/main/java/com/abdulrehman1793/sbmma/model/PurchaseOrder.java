package com.abdulrehman1793.sbmma.model;

import com.abdulrehman1793.sbmma.model.enums.PurchaseOrderStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class PurchaseOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private RawGoods rawGoods;

    @Enumerated(EnumType.STRING)
    @Column(length = 10, nullable = false)
    private PurchaseOrderStatus status;

    @Builder.Default
    private LocalDate orderDate = LocalDate.now();

    @Column(length = 20, nullable = false)
    private String upc;

    @Builder.Default
    private double qty = 0.00;

    @ManyToOne
    private UnitOfMeasure uom;

    @Builder.Default
    private double itemCost = 0.00;

    @Builder.Default
    private double totalCost = 0.00;

    @ManyToOne
    private Orders orders;
}
