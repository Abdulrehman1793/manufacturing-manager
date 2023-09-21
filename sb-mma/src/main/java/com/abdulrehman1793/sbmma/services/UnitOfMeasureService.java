package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.model.UnitOfMeasure;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UnitOfMeasureService {
    PagedResponse<UnitOfMeasure> findAll(Pageable pageable);
}
