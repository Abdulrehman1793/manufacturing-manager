package com.abdulrehman1793.sbmma.web.mappers;

import com.abdulrehman1793.sbmma.model.Cost;
import com.abdulrehman1793.sbmma.web.model.CostDto;
import org.mapstruct.Mapper;

@Mapper
public interface CostMapper {
    Cost toEntity(CostDto costDto);

    CostDto toDto(Cost cost);
}
