package com.abdulrehman1793.sbmma.web.mappers;

import com.abdulrehman1793.sbmma.model.ProductType;
import com.abdulrehman1793.sbmma.web.model.ProductTypeDto;
import org.mapstruct.Mapper;

@Mapper
public interface ProductTypeMapper {
    ProductType toEntity(ProductTypeDto productTypeDto);

    ProductTypeDto toDto(ProductType productType);
}
