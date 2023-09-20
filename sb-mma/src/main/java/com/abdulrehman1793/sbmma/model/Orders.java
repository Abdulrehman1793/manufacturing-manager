package com.abdulrehman1793.sbmma.model;

import com.abdulrehman1793.sbmma.model.enums.OrderType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Person customer;

    @ManyToOne
    private Person employee;

    @Enumerated(EnumType.STRING)
    @Column(length = 7, nullable = false)
    private OrderType orderType;

    @Column(length = 10, nullable = false)
    private String status;

    @Builder.Default
    private LocalDate orderDate = LocalDate.now();

    private LocalDate dueDate;

    @Builder.Default
    private double orderTotal = 0.00;

    private int progress;

    private LocalDate qualityCheckDate;

    @ManyToOne
    @JoinColumn(name = "checked_by", referencedColumnName = "id")
    private Person checkedBy;
}
