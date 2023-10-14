package com.abdulrehman1793.sbmma.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;

import java.sql.Types;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Builder.Default
    private Long size = 0L;

    @Column(length = 50, nullable = false)
    private String fileName;

    @Lob
    @JdbcTypeCode(Types.VARBINARY)
    private byte[] imageData;
}
