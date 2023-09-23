package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.model.Person;
import com.abdulrehman1793.sbmma.model.enums.PersonType;
import com.abdulrehman1793.sbmma.repository.PersonRepository;
import com.abdulrehman1793.sbmma.services.PersonService;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Qualifier("staff")
@RequiredArgsConstructor
public class StaffServiceImpl implements PersonService {
    private final PersonRepository personRepository;

    @Override
    public PagedResponse<Person> findAll(Pageable pageable) {
        Page<Person> page = personRepository.findAllByType(pageable, PersonType.staff);

        return new PagedResponse<>(
                page.stream().toList(),
                PageRequest.of(
                        page.getPageable().getPageNumber(),
                        page.getPageable().getPageSize(),
                        page.getSort()),
                page.getTotalElements()
        );
    }

    @Override
    public boolean isEmailAlreadyExists(String email) {
        return personRepository.existsPersonByEmail(email);
    }
}
