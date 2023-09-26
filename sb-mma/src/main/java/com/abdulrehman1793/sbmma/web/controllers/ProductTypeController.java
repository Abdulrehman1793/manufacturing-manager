package com.abdulrehman1793.sbmma.web.controllers;

import com.abdulrehman1793.sbmma.services.ProductTypeService;
import com.abdulrehman1793.sbmma.web.model.CreateResponse;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.ProductTypeDto;
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
@RequestMapping("/api/v1/product-type")
public class ProductTypeController {
    private final String[] FIELDS = new String[]{"id", "name", "phone"};

    private final ProductTypeService productTypeService;
    private final ControllerHelperService controllerHelperService;

    public ProductTypeController(ProductTypeService productTypeService, ControllerHelperService controllerHelperService) {
        this.productTypeService = productTypeService;
        this.controllerHelperService = controllerHelperService;
    }

    @GetMapping
    public PagedResponse<ProductTypeDto> findAll(
            @RequestParam(value = "page", defaultValue = AppConstant.PAGE, required = false) int page,
            @RequestParam(value = "size", defaultValue = AppConstant.SIZE, required = false) int size,
            @RequestParam(value = "sort", defaultValue = "", required = false) String[] sorts) {

        log.info("Request findPage: Page= " + page + ", size= " + size + ", Sort= " + Arrays.stream(sorts).toList());

        Pageable pageable = PageRequest.of(page, size, controllerHelperService.sortRequestParameterToSort(FIELDS, sorts));

        return productTypeService.findAll(pageable);
    }

    @PostMapping
    public ResponseEntity<CreateResponse> create(@RequestBody @Valid ProductTypeDto productTypeDto) {
        String staffId = productTypeService.create(productTypeDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new CreateResponse(String.valueOf(staffId)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CreateResponse> update(@PathVariable String id, @RequestBody @Valid ProductTypeDto productTypeDto) {
        productTypeService.update(id, productTypeDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new CreateResponse(String.valueOf(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable String id) {
        productTypeService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Record deleted");
    }
}
