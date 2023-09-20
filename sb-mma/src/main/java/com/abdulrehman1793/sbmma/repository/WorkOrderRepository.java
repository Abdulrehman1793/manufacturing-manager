package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.WorkOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkOrderRepository extends JpaRepository<WorkOrder, Integer> {
}