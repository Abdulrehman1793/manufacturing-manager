package com.abdulrehman1793.sbmma.config;

import com.abdulrehman1793.sbmma.web.serializer.SortSerializer;
import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.module.SimpleModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Sort;

@Configuration
public class JacksonConfiguration {
    @Bean
    public Module customSortModule() {
        SimpleModule module = new SimpleModule();
        module.addSerializer(Sort.class, new SortSerializer());
        return module;
    }
}
