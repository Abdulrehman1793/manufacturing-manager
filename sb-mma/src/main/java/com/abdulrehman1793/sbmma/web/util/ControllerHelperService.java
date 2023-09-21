package com.abdulrehman1793.sbmma.web.util;

import org.springframework.data.domain.Sort;

public interface ControllerHelperService {
    Sort sortRequestParameterToSort(String[] domainFields, String[] sortParameters);
}
