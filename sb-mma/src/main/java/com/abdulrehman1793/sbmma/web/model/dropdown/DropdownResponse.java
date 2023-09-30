package com.abdulrehman1793.sbmma.web.model.dropdown;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DropdownResponse {
    private List<KeyValuePair<String, String>> content = new ArrayList<>();
    private String error;
}
