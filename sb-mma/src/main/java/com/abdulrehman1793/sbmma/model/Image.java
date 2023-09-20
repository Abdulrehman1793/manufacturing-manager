package com.abdulrehman1793.sbmma.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Builder.Default
    private int size = 0;

    @Column(length = 50, nullable = false)
    private String fileName;

    @Lob
    private byte[] imageData;
}
