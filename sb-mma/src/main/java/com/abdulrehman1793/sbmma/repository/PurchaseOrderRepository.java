package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Integer> {
}