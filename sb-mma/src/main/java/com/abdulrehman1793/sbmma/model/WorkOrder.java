package com.abdulrehman1793.sbmma.model;

import com.abdulrehman1793.sbmma.model.enums.WorkOrderStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class WorkOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private FinishedGoods finishedGoods;

    @Enumerated(EnumType.STRING)
    @Column(length = 10, nullable = false)
    private WorkOrderStatus status;

    @Builder.Default
    private LocalDate orderDate = LocalDate.now();

    @Builder.Default
    private double fullBatch = 0.00;

    @Builder.Default
    private double actualQty = 0.00;

    @ManyToOne
    private ProductType type;

    @Builder.Default
    private double batchCost = 0.00;

    @Builder.Default
    private double actualCost = 0.00;

    @ManyToOne
    private Orders orders;
}
