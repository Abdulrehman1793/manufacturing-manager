package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.repository.ProductTypeRepository;
import com.abdulrehman1793.sbmma.services.DropdownService;
import com.abdulrehman1793.sbmma.web.model.dropdown.DropdownResponse;
import com.abdulrehman1793.sbmma.web.util.DropdownName;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DropdownServiceImpl implements DropdownService {

    private final ProductTypeRepository productTypeRepository;

    @Override
    public List<DropdownResponse> process(String... dropdowns) {
        List<DropdownResponse> result = new ArrayList<>();

        for (String dropdown : dropdowns) {
            boolean isNotInEnum = EnumSet.allOf(DropdownName.class)
                    .stream()
                    .noneMatch(dropdownName -> dropdownName.name().equals(dropdown));

            DropdownResponse dropdownResponse = new DropdownResponse();

            if (isNotInEnum) {
                dropdownResponse.setKey(dropdown);
                dropdownResponse.setError("Not found");
            } else {
                if (DropdownName.valueOf(dropdown) == DropdownName.ProductType) {
                    dropdownResponse.setKey(DropdownName.ProductType.name());
                    dropdownResponse.setContent(productTypeRepository.findAllProductTypeKeyValue());
                }
            }
            result.add(dropdownResponse);
        }

        return result;
    }
}
