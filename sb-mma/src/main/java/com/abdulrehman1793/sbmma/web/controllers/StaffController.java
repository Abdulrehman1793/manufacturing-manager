package com.abdulrehman1793.sbmma.web.controllers;

import com.abdulrehman1793.sbmma.model.Person;
import com.abdulrehman1793.sbmma.services.PersonService;
import com.abdulrehman1793.sbmma.web.model.CreateResponse;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.PersonDto;
import com.abdulrehman1793.sbmma.web.util.AppConstant;
import com.abdulrehman1793.sbmma.web.util.ControllerHelperService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@Slf4j
@RestController
@RequestMapping("/api/v1/staff")
public class StaffController {
    private final String[] FIELDS = new String[]{"id", "name", "phone"};


    private final PersonService personService;
    private final ControllerHelperService controllerHelperService;

    public StaffController(PersonService personService, ControllerHelperService controllerHelperService) {
        this.personService = personService;
        this.controllerHelperService = controllerHelperService;
    }

    @GetMapping
    public PagedResponse<Person> findAll(
            @RequestParam(value = "page", defaultValue = AppConstant.PAGE, required = false) int page,
            @RequestParam(value = "size", defaultValue = AppConstant.SIZE, required = false) int size,
            @RequestParam(value = "sort", defaultValue = "", required = false) String[] sorts) {

        log.info("Request findPage: Page= " + page + ", size= " + size + ", Sort= " + Arrays.stream(sorts).toList());

        Pageable pageable = PageRequest.of(page, size, controllerHelperService.sortRequestParameterToSort(FIELDS, sorts));

        return personService.findAllStaff(pageable);
    }

    @PostMapping
    public ResponseEntity<CreateResponse> createStaff(@RequestBody @Valid PersonDto person) {
        return ResponseEntity.status(HttpStatus.CREATED).body(new CreateResponse(String.valueOf(1111)));
    }
}
