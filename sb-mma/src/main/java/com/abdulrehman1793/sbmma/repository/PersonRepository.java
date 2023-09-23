package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.Person;
import com.abdulrehman1793.sbmma.model.enums.PersonType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer> {
    Page<Person> findAllByType(Pageable pageable, PersonType type);
}
