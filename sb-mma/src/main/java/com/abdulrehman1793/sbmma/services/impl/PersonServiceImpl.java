package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.model.Person;
import com.abdulrehman1793.sbmma.model.enums.PersonType;
import com.abdulrehman1793.sbmma.repository.PersonRepository;
import com.abdulrehman1793.sbmma.services.PersonService;
import com.abdulrehman1793.sbmma.web.mappers.PersonMapper;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.PersonDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements PersonService {
    private final PersonRepository personRepository;
    private final PersonMapper personMapper;

    @Override
    public PagedResponse<Person> findAllCustomer(Pageable pageable) {
        return findAll(PersonType.customer, pageable);
    }

    @Override
    public PagedResponse<Person> findAllStaff(Pageable pageable) {
        return findAll(PersonType.staff, pageable);
    }

    private PagedResponse<Person> findAll(PersonType personType, Pageable pageable) {
        Page<Person> page = Page.empty();

        if (personType == PersonType.staff)
            page = personRepository.findAllByType(pageable, PersonType.staff);
        else if (personType == PersonType.customer)
            page = personRepository.findAllByType(pageable, PersonType.customer);

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
    public String createStaff(PersonDto personDto) {
        // Make sure PersonType is staff
        personDto.setType(PersonType.staff);
        return savePerson(personDto);
    }

    @Override
    public String createCustomer(PersonDto personDto) {
        // Make sure PersonType is customer
        personDto.setType(PersonType.customer);
        return savePerson(personDto);
    }

    private String savePerson(PersonDto personDto) {
        Person person = personMapper.personDtoToPerson(personDto);
        person = personRepository.save(person);
        return String.valueOf(person.getId());
    }

    @Override
    public boolean isEmailAlreadyExists(String email) {
        return personRepository.existsPersonByEmail(email);
    }
}
