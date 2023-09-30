package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.web.model.dropdown.DropdownResponse;

import java.util.HashMap;

public interface DropdownService {
    HashMap<String, DropdownResponse> process(String... dropdowns);
}
