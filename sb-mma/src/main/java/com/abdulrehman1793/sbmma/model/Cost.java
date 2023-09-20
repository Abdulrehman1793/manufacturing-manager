package com.abdulrehman1793.sbmma.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class Cost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, unique = true, nullable = false)
    private String name;

    @Column(length = 500)
    private String description;

    @ManyToOne
    private ProductType type;

    @Column(length = 50)
    private String costUnit;

    private double amount;
}
