package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.ProductType;
import com.abdulrehman1793.sbmma.web.model.dropdown.KeyValuePair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductTypeRepository extends JpaRepository<ProductType, String> {

    @Query("SELECT new com.abdulrehman1793.sbmma.web.model.dropdown.KeyValuePair(p.id, p.name) FROM ProductType p")
    List<KeyValuePair<String,String>> findAllProductTypeKeyValue();
}
