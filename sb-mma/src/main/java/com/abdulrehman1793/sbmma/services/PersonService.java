package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.model.Person;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import org.springframework.data.domain.Pageable;

public interface PersonService {
    PagedResponse<Person> findAll(Pageable pageable);
}
