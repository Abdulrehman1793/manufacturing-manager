package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.model.Person;
import com.abdulrehman1793.sbmma.repository.PersonRepository;
import com.abdulrehman1793.sbmma.services.PersonService;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StaffServiceImpl implements PersonService {
    private final PersonRepository personRepository;

    @Override
    public PagedResponse<Person> findAll(Pageable pageable) {
        Page<Person> page = personRepository.findAll(pageable);

        return new PagedResponse<>(
                page.stream().toList(),
                PageRequest.of(
                        page.getPageable().getPageNumber(),
                        page.getPageable().getPageSize(),
                        page.getSort()),
                page.getTotalElements()
        );
    }
}
