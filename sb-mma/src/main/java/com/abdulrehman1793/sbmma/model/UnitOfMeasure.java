package com.abdulrehman1793.sbmma.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class UnitOfMeasure {
    @Id
    @Column(length = 5, nullable = false)
    private String id;

    @Column(length = 50, unique = true, nullable = false)
    private String name;
}

