package com.abdulrehman1793.sbmma.web.controllers;

import com.abdulrehman1793.sbmma.services.PurchaseUnitService;
import com.abdulrehman1793.sbmma.web.model.CreateResponse;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.PurchaseUnitDto;
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
@RequestMapping("/api/v1/purchase-unit")
public class PurchaseUnitController {
    private final String[] FIELDS = new String[]{"id", "name"};

    private final PurchaseUnitService purchaseUnitService;
    private final ControllerHelperService controllerHelperService;

    public PurchaseUnitController(PurchaseUnitService purchaseUnitService, ControllerHelperService controllerHelperService) {
        this.purchaseUnitService = purchaseUnitService;
        this.controllerHelperService = controllerHelperService;
    }

    @GetMapping
    public PagedResponse<PurchaseUnitDto> findAll(
            @RequestParam(value = "page", defaultValue = AppConstant.PAGE, required = false) int page,
            @RequestParam(value = "size", defaultValue = AppConstant.SIZE, required = false) int size,
            @RequestParam(value = "sort", defaultValue = "", required = false) String[] sorts) {

        log.info("Request findPage: Page= " + page + ", size= " + size + ", Sort= " + Arrays.stream(sorts).toList());

        Pageable pageable = PageRequest.of(page, size, controllerHelperService.sortRequestParameterToSort(FIELDS, sorts));

        return purchaseUnitService.findAll(pageable);
    }

    @PostMapping
    public ResponseEntity<CreateResponse> create(@RequestBody @Valid PurchaseUnitDto purchaseUnitDto) {
        String id = purchaseUnitService.create(purchaseUnitDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new CreateResponse(String.valueOf(id)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CreateResponse> update(
            @PathVariable String id, @RequestBody @Valid PurchaseUnitDto purchaseUnitDto) {
        purchaseUnitService.update(id, purchaseUnitDto);
        return ResponseEntity.status(HttpStatus.OK).body(new CreateResponse(String.valueOf(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<CreateResponse> delete(@PathVariable String id) {
        purchaseUnitService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new CreateResponse(String.valueOf(id)));
    }
}
