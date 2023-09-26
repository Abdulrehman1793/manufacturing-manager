package com.abdulrehman1793.sbmma.model;

import com.abdulrehman1793.sbmma.model.enums.Type;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class ProductType {
    @Id
    @Column(length = 10, nullable = false)
    private String id;

    @Column(length = 50, unique = true, nullable = false)
    private String name;

    @Column(length = 250)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(length = 15, nullable = false)
    private Type type;

//    TODO: implement this and handle in flyway, to make sure no concurrent update
//    @Version
//    private Long version;
}
