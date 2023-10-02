package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.RawGoodsDto;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import org.springframework.data.domain.Pageable;

public interface RawGoodsService {
    PagedResponse<RawGoodsDto> findAll(Pageable pageable);

    String create(RawGoodsDto goodsDto);

    void update(int id, RawGoodsDto goodsDto);

    void delete(int id);
}
