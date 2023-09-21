package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.model.UnitOfMeasure;
import com.abdulrehman1793.sbmma.repository.UnitOfMeasureRepository;
import com.abdulrehman1793.sbmma.services.UnitOfMeasureService;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UnitOfMeasureServiceImpl implements UnitOfMeasureService {

    private final UnitOfMeasureRepository unitOfMeasureRepository;

    @Override
    public PagedResponse<UnitOfMeasure> findAll(Pageable pageable) {

        Page<UnitOfMeasure> page = unitOfMeasureRepository.findAll(pageable);

        return new PagedResponse<>(
                page.stream().toList(),
                PageRequest.of(
                        page.getPageable().getPageNumber(),
                        page.getPageable().getPageSize(),
                        page.getSort()),
                page.getTotalElements()
        );
    }
}
