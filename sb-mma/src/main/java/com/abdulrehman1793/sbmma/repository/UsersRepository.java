package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.auth.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    Optional<Users> findByUserName(String userName);
}
