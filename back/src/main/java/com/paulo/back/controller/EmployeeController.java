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

import com.paulo.back.model.Employee;
import com.paulo.back.repository.EmployeeRepository;
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    public List<Employee> list() {
        return employeeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> findById(@PathVariable Long id) {
        return employeeRepository.findById(id)
            .map(recordFound -> ResponseEntity.ok().body(recordFound))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Employee create(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeRepository.findById(id)
            .map(recordFound -> {
                recordFound.setModifiedBy("PersonWhoModifiedTODO");
                recordFound.setModifiedDate(LocalDateTime.now());
                recordFound.setName(employee.getName());
                recordFound.setSurname(employee.getSurname());
                recordFound.setStatus(employee.getStatus());
                recordFound.setEmail(employee.getEmail());
                recordFound.setAge(employee.getAge());
                recordFound.setPosition(employee.getPosition());
                Employee updated = employeeRepository.save(recordFound);
                return ResponseEntity.ok().body(updated);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        return employeeRepository.findById(id)
            .map(recordFound -> {
                employeeRepository.deleteById(id);
                return ResponseEntity.noContent().<Void>build();              
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
