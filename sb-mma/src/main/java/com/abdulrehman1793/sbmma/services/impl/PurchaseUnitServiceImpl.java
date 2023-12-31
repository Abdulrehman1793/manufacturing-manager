package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.exceptions.BadRequestException;
import com.abdulrehman1793.sbmma.model.PurchaseUnit;
import com.abdulrehman1793.sbmma.repository.PurchaseUnitRepository;
import com.abdulrehman1793.sbmma.services.PurchaseUnitService;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.PurchaseUnitDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PurchaseUnitServiceImpl implements PurchaseUnitService {

    private final PurchaseUnitRepository purchaseUnitRepository;

    @Override
    public PagedResponse<PurchaseUnitDto> findAll(Pageable pageable) {
        Page<PurchaseUnit> page = purchaseUnitRepository.findAll(pageable);

        return new PagedResponse<>(
                page.stream()
                        .map((row) ->
                                PurchaseUnitDto.builder()
                                        .id(row.getId()).name(row.getName()).build())
                        .toList(),
                PageRequest.of(
                        page.getPageable().getPageNumber(),
                        page.getPageable().getPageSize(),
                        page.getSort()),
                page.getTotalElements()
        );
    }

    @Override
    public String create(PurchaseUnitDto purchaseUnitDto) {
        PurchaseUnit purchaseUnit = PurchaseUnit.builder()
                .name(purchaseUnitDto.getName())
                .build();
        purchaseUnit = purchaseUnitRepository.save(purchaseUnit);
        return String.valueOf(purchaseUnit.getId());
    }

    @Override
    public void update(String id, PurchaseUnitDto purchaseUnitDto) {
        PurchaseUnit purchaseUnit = purchaseUnitRepository.findById(id)
                .orElseThrow(() -> new BadRequestException(""));

        purchaseUnit.setName(purchaseUnitDto.getName());

        purchaseUnit = purchaseUnitRepository.save(purchaseUnit);
    }

    @Override
    public void delete(String id) {
        purchaseUnitRepository.deleteById(id);
    }
}
