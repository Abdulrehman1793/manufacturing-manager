package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.CostDto;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import org.springframework.data.domain.Pageable;

public interface CostService {
    PagedResponse<CostDto> findAll(Pageable pageable);

    String create(CostDto costDto);

    void update(int id, CostDto costDto);

    void delete(int id);
}
