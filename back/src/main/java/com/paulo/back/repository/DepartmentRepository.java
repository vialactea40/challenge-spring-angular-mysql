package com.paulo.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paulo.back.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
    
}
