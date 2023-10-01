package com.abdulrehman1793.sbmma.web.mappers;

import com.abdulrehman1793.sbmma.model.Cost;
import com.abdulrehman1793.sbmma.web.model.CostDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface CostMapper {
    @Mapping(target = "type", ignore = true)
    Cost toEntity(CostDto costDto);

    @Mapping(source = "type.id", target = "type")
    CostDto toDto(Cost cost);
}
