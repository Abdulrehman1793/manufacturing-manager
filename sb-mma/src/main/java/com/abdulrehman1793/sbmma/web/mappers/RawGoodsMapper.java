package com.abdulrehman1793.sbmma.web.mappers;

import com.abdulrehman1793.sbmma.model.RawGoods;
import com.abdulrehman1793.sbmma.web.model.RawGoodsDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface RawGoodsMapper {
    @Mapping(target = "type", ignore = true)
    @Mapping(target = "uom", ignore = true)
    @Mapping(target = "purchaseUnit", ignore = true)
    RawGoods toEntity(RawGoodsDto rawGoodsDto);

    @Mapping(source = "type.id", target = "type")
    @Mapping(source = "uom.id", target = "uom")
    @Mapping(source = "purchaseUnit.id", target = "purchaseUnit")
    RawGoodsDto toDto(RawGoods rawGoods);
}
