package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.auth.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority, Integer> {
}
