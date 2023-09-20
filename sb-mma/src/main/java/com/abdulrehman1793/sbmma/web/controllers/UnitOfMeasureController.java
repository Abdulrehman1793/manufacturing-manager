package com.abdulrehman1793.sbmma.web.controllers;

import com.abdulrehman1793.sbmma.model.UnitOfMeasure;
import com.abdulrehman1793.sbmma.web.services.UnitOfMeasureService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/uom")
public class UnitOfMeasureController {
    private final UnitOfMeasureService unitOfMeasureService;

    @GetMapping("/all")
    public List<UnitOfMeasure> findAll() {
        return unitOfMeasureService.findAll();
    }
}
