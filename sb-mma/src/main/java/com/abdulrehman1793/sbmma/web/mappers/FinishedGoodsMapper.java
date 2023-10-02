package com.abdulrehman1793.sbmma.web.mappers;

import com.abdulrehman1793.sbmma.model.FinishedGoods;
import com.abdulrehman1793.sbmma.web.model.FinishedGoodsDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface FinishedGoodsMapper {
    @Mapping(target = "type", ignore = true)
    FinishedGoods toEntity(FinishedGoodsDto finishedGoodsDto);

    @Mapping(source = "type.id", target = "type")
    FinishedGoodsDto toDto(FinishedGoods finishedGoods);
}
