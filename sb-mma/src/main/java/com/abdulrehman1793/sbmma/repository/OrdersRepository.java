package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders, Integer> {
}