package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer> {
}
