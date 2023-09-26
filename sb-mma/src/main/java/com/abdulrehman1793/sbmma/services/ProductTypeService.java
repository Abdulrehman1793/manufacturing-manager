package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.ProductTypeDto;
import org.springframework.data.domain.Pageable;

public interface ProductTypeService {
    PagedResponse<ProductTypeDto> findAll(Pageable pageable);

    String create(ProductTypeDto productTypeDto);

    void update(String id, ProductTypeDto productTypeDto);

    void delete(String id);
}
