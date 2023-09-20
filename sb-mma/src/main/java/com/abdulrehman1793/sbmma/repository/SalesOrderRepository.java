package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.SalesOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesOrderRepository extends JpaRepository<SalesOrder, Integer> {
}