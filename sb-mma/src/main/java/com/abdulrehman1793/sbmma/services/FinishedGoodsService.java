package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.FinishedGoodsDto;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import org.springframework.data.domain.Pageable;

public interface FinishedGoodsService {
    PagedResponse<FinishedGoodsDto> findAll(Pageable pageable);

    String create(FinishedGoodsDto goodsDto);

    void update(int id, FinishedGoodsDto goodsDto);

    void delete(int id);
}
