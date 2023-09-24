package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.model.Person;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.PersonDto;
import org.springframework.data.domain.Pageable;

public interface PersonService {
    PagedResponse<Person> findAllCustomer(Pageable pageable);

    PagedResponse<Person> findAllStaff(Pageable pageable);

    String createStaff(PersonDto personDto);

    String createCustomer(PersonDto personDto);

    boolean isEmailAlreadyExists(String email);
}
