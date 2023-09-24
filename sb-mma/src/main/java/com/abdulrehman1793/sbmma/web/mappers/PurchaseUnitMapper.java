package com.abdulrehman1793.sbmma.web.mappers;

import com.abdulrehman1793.sbmma.model.PurchaseUnit;
import com.abdulrehman1793.sbmma.web.model.PurchaseUnitDto;
import org.mapstruct.Mapper;

@Mapper
public interface PurchaseUnitMapper {
    PurchaseUnitDto purchaseUnitTopurchaseUnitDto(PurchaseUnit purchaseUnit);

    PurchaseUnit purchaseUnitDtoToPurchaseUnit(PurchaseUnitDto purchaseUnitDto);
}
