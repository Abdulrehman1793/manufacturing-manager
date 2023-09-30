package com.abdulrehman1793.sbmma.web.model.dropdown;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class KeyValuePair<K, V> {
    @JsonProperty("k")
    private K key;
    @JsonProperty("v")
    private V value;
}
