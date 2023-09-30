package com.abdulrehman1793.sbmma.web.model.dropdown;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class KeyValuePair<K, V> {
    private K key;
    private V value;
}
