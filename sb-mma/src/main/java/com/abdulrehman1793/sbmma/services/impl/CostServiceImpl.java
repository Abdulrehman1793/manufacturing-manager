package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.exceptions.BadRequestException;
import com.abdulrehman1793.sbmma.model.Cost;
import com.abdulrehman1793.sbmma.repository.CostRepository;
import com.abdulrehman1793.sbmma.services.CostService;
import com.abdulrehman1793.sbmma.web.mappers.CostMapper;
import com.abdulrehman1793.sbmma.web.model.CostDto;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CostServiceImpl implements CostService {

    private final CostRepository costRepository;
    private final CostMapper mapper;

    @Override
    public PagedResponse<CostDto> findAll(Pageable pageable) {
        Page<Cost> page = costRepository.findAll(pageable);

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
    public String create(CostDto costDto) {
        Cost cost = mapper.toEntity(costDto);
        cost = costRepository.save(cost);
        return String.valueOf(cost.getId());
    }

    @Override
    public void update(int id, CostDto costDto) {
        Cost cost = costRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Cost could not be found"));

        Cost newCost = mapper.toEntity(costDto);

        if (newCost.equals(cost))
            throw new BadRequestException("No changes detected");

        cost.setName(newCost.getName());
        cost.setDescription(newCost.getDescription());
        cost.setType(newCost.getType());
        cost.setCostUnit(newCost.getCostUnit());
        cost.setAmount(newCost.getAmount());

        costRepository.save(cost);
    }

    @Override
    public void delete(int id) {
        Cost cost = costRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Cost could not be found"));

        costRepository.delete(cost);
    }
}
