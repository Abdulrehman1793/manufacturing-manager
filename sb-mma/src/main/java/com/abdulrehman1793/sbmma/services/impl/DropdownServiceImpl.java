package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.repository.ProductTypeRepository;
import com.abdulrehman1793.sbmma.services.DropdownService;
import com.abdulrehman1793.sbmma.web.model.dropdown.DropdownResponse;
import com.abdulrehman1793.sbmma.web.util.DropdownName;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class DropdownServiceImpl implements DropdownService {

    private final ProductTypeRepository productTypeRepository;

    @Override
    public HashMap<String, DropdownResponse> process(String... dropdowns) {
        HashMap<String, DropdownResponse> result = new HashMap<>();

        for (String dropdown : dropdowns) {
            boolean isNotInEnum = EnumSet.allOf(DropdownName.class)
                    .stream()
                    .noneMatch(dropdownName -> dropdownName.name().equals(dropdown));

            DropdownResponse dropdownResponse = new DropdownResponse();

            if (isNotInEnum) {
                dropdownResponse.setError("Not found");
            } else {
                if (DropdownName.valueOf(dropdown) == DropdownName.ProductType) {
                    dropdownResponse.setContent(productTypeRepository.findAllProductTypeKeyValue());
                }
            }
            result.put(dropdown, dropdownResponse);
        }

        return result;
    }
}
