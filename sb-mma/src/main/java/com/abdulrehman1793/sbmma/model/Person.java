package com.abdulrehman1793.sbmma.model;

import com.abdulrehman1793.sbmma.model.enums.PersonType;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 100, nullable = false)
    private String name;

    @Column(length = 100, nullable = false)
    private String phone;

    @Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(length = 200, nullable = false)
    private String address;

    @Column(length = 50)
    private String city;

    @Column(length = 50)
    private String state;

    private int zip;

    @Enumerated(EnumType.STRING)
    @Column(length = 50, nullable = false)
    private PersonType type;
}
