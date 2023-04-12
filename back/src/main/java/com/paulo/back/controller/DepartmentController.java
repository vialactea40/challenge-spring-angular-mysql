package com.paulo.back.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.paulo.back.model.Department;
import com.paulo.back.repository.DepartmentRepository;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    @Autowired
    private DepartmentRepository departmentRepository;

    public DepartmentController(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @GetMapping
    public List<Department> list() {
        return departmentRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Department> findById(@PathVariable Long id) {
        return departmentRepository.findById(id)
            .map(recordFound -> ResponseEntity.ok().body(recordFound))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Department create(@RequestBody Department department) {
        return departmentRepository.save(department);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Department> update(@PathVariable Long id, @RequestBody Department department) {
        return departmentRepository.findById(id)
            .map(recordFound -> {
                recordFound.setModifiedBy("PersonWhoModifiedTODO");
                recordFound.setModifiedDate(LocalDateTime.now());
                recordFound.setDescription(department.getDescription());
                recordFound.setName(department.getName());
                recordFound.setPhone(department.getPhone());
                recordFound.setStatus(department.getStatus());
                recordFound.setEnterprise(department.getEnterprise());
                Department updated = departmentRepository.save(recordFound);
                return ResponseEntity.ok().body(updated);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        return departmentRepository.findById(id)
            .map(recordFound -> {
                departmentRepository.deleteById(id);
                return ResponseEntity.noContent().<Void>build();              
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
