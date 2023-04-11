package com.paulo.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paulo.back.model.Enterprise;

public interface EnterpriseRepository extends JpaRepository<Enterprise, Long> {
    
}
