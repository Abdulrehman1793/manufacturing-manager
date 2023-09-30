package com.abdulrehman1793.sbmma.web.controllers;

import com.abdulrehman1793.sbmma.services.DropdownService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/v1/lookup")
public class DropdownController {
    private final DropdownService dropdownService;

    public DropdownController(DropdownService dropdownService) {
        this.dropdownService = dropdownService;
    }

    @GetMapping
    public Object process(@RequestParam(defaultValue = "") String[] keys) {
        return dropdownService.process(keys);
    }
}
