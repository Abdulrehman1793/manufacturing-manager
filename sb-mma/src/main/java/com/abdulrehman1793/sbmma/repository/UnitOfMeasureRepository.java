package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.UnitOfMeasure;
import com.abdulrehman1793.sbmma.web.model.dropdown.KeyValuePair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UnitOfMeasureRepository extends JpaRepository<UnitOfMeasure, String> {
    @Query("SELECT new com.abdulrehman1793.sbmma.web.model.dropdown.KeyValuePair(p.id, p.name) FROM UnitOfMeasure p")
    List<KeyValuePair<String, String>> findAllUnitOfMeasureKeyValue();
}
