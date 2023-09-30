package com.abdulrehman1793.sbmma.web.controllers;

import com.abdulrehman1793.sbmma.services.CostService;
import com.abdulrehman1793.sbmma.web.model.CostDto;
import com.abdulrehman1793.sbmma.web.model.CreateResponse;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.util.AppConstant;
import com.abdulrehman1793.sbmma.web.util.ControllerHelperService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@Slf4j
@RestController
@RequestMapping("/api/v1/cost")
public class CostController {
    private final String[] FIELDS = new String[]{"name"};

    private final CostService costService;
    private final ControllerHelperService controllerHelperService;

    public CostController(CostService costService, ControllerHelperService controllerHelperService) {
        this.costService = costService;
        this.controllerHelperService = controllerHelperService;
    }

    @GetMapping
    public PagedResponse<CostDto> findAll(
            @RequestParam(value = "page", defaultValue = AppConstant.PAGE, required = false) int page,
            @RequestParam(value = "size", defaultValue = AppConstant.SIZE, required = false) int size,
            @RequestParam(value = "sort", defaultValue = "", required = false) String[] sorts) {

        log.info("Request findPage: Page= " + page + ", size= " + size + ", Sort= " + Arrays.stream(sorts).toList());

        Pageable pageable = PageRequest.of(page, size, controllerHelperService.sortRequestParameterToSort(FIELDS, sorts));

        return costService.findAll(pageable);
    }

    @PostMapping
    public ResponseEntity<CreateResponse> create(@RequestBody @Valid CostDto costDto) {
        String id = costService.create(costDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new CreateResponse(String.valueOf(id)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CreateResponse> update(@PathVariable int id, @RequestBody @Valid CostDto costDto) {
        costService.update(id, costDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new CreateResponse(String.valueOf(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        costService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Record deleted");
    }
}
