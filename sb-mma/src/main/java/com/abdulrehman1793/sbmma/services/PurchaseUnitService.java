package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.PurchaseUnitDto;
import org.springframework.data.domain.Pageable;

public interface PurchaseUnitService {
    PagedResponse<PurchaseUnitDto> findAll(Pageable pageable);

    String create(PurchaseUnitDto purchaseUnitDto);

    String update(String id, PurchaseUnitDto purchaseUnitDto);

    void delete(String id);
}
