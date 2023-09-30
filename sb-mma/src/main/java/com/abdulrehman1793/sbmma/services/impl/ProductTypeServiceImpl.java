package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.exceptions.BadRequestException;
import com.abdulrehman1793.sbmma.model.ProductType;
import com.abdulrehman1793.sbmma.repository.ProductTypeRepository;
import com.abdulrehman1793.sbmma.services.ProductTypeService;
import com.abdulrehman1793.sbmma.web.mappers.ProductTypeMapper;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.ProductTypeDto;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductTypeServiceImpl implements ProductTypeService {

    private final ProductTypeRepository productTypeRepository;
    private final ProductTypeMapper mapper;

    @Override
    public PagedResponse<ProductTypeDto> findAll(Pageable pageable) {
        Page<ProductType> page = productTypeRepository.findAll(pageable);

        return new PagedResponse<>(
                page.stream()
                        .map(mapper::toDto)
                        .toList(),
                PageRequest.of(
                        page.getPageable().getPageNumber(),
                        page.getPageable().getPageSize(),
                        page.getSort()),
                page.getTotalElements()
        );
    }

    @Override
    public String create(ProductTypeDto productTypeDto) {
        ProductType productType = mapper.toEntity(productTypeDto);
        String id = StringUtils.abbreviate(productType.getName(), 10);
        productType.setId(id.toLowerCase());
        productType = productTypeRepository.save(productType);
        return String.valueOf(productType.getId());
    }

    @Override
    public void update(String id, ProductTypeDto productTypeDto) {
        ProductType productType = productTypeRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Product type could not be found"));

        ProductType newData = mapper.toEntity(productTypeDto);

        if (newData.equals(productType))
            throw new BadRequestException("Product type could not be found");

        productType.setName(newData.getName());
        productType.setDescription(newData.getDescription());
        productType.setType(newData.getType());

        productTypeRepository.save(productType);
    }

    @Override
    public void delete(String id) {
        ProductType productType = productTypeRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Product type could not be found"));

        productTypeRepository.delete(productType);
    }
}
