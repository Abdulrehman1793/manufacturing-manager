package com.abdulrehman1793.sbmma.web.controllers;

import com.abdulrehman1793.sbmma.services.FinishedGoodsService;
import com.abdulrehman1793.sbmma.web.model.CreateResponse;
import com.abdulrehman1793.sbmma.web.model.FinishedGoodsDto;
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
@RequestMapping("/api/v1/finished-goods")
public class FinishedGoodsController {
    private final String[] FIELDS = new String[]{"name"};

    private final FinishedGoodsService finishedGoodsService;
    private final ControllerHelperService controllerHelperService;

    public FinishedGoodsController(FinishedGoodsService finishedGoodsService, ControllerHelperService controllerHelperService) {
        this.finishedGoodsService = finishedGoodsService;
        this.controllerHelperService = controllerHelperService;
    }

    @GetMapping
    public PagedResponse<FinishedGoodsDto> findAll(
            @RequestParam(value = "page", defaultValue = AppConstant.PAGE, required = false) int page,
            @RequestParam(value = "size", defaultValue = AppConstant.SIZE, required = false) int size,
            @RequestParam(value = "sort", defaultValue = "", required = false) String[] sorts) {

        log.info("Request findPage: Page= " + page + ", size= " + size + ", Sort= " + Arrays.stream(sorts).toList());

        Pageable pageable = PageRequest.of(page, size, controllerHelperService.sortRequestParameterToSort(FIELDS, sorts));

        return finishedGoodsService.findAll(pageable);
    }

    @PostMapping
    public ResponseEntity<CreateResponse> create(@RequestBody @Valid FinishedGoodsDto finishedGoodsDto) {
        String id = finishedGoodsService.create(finishedGoodsDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new CreateResponse(String.valueOf(id)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CreateResponse> update(@PathVariable int id, @RequestBody @Valid FinishedGoodsDto finishedGoodsDto) {
        finishedGoodsService.update(id, finishedGoodsDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new CreateResponse(String.valueOf(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        finishedGoodsService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Record deleted");
    }
}
