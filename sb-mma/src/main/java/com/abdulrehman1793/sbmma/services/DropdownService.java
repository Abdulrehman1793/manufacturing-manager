package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.dropdown.DropdownResponse;

import java.util.List;

public interface DropdownService {
    List<DropdownResponse> process(String... dropdowns);
}
