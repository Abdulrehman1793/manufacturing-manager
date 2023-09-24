package com.abdulrehman1793.sbmma.web.mappers;

import com.abdulrehman1793.sbmma.model.Person;
import com.abdulrehman1793.sbmma.web.model.PersonDto;
import org.mapstruct.Mapper;

@Mapper
public interface PersonMapper {
    Person personDtoToPerson(PersonDto personDto);
}
