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

import com.paulo.back.model.Enterprise;
import com.paulo.back.repository.EnterpriseRepository;
//restDepartment
@RestController
@RequestMapping("/api/enterprises")
public class EnterpriseController {

    @Autowired
    private EnterpriseRepository enterpriseRepository;

    public EnterpriseController(EnterpriseRepository enterpriseRepository) {
        this.enterpriseRepository = enterpriseRepository;
    }

    @GetMapping
    public List<Enterprise> list() {
        return enterpriseRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Enterprise> findById(@PathVariable Long id) {
        return enterpriseRepository.findById(id)
            .map(recordFound -> ResponseEntity.ok().body(recordFound))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Enterprise create(@RequestBody Enterprise enterprise) {
        return enterpriseRepository.save(enterprise);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Enterprise> update(@PathVariable Long id, @RequestBody Enterprise enterprise) {
        return enterpriseRepository.findById(id)
            .map(recordFound -> {
                recordFound.setModifiedBy("PersonWhoModifiedTODO");
                recordFound.setModifiedDate(LocalDateTime.now());
                recordFound.setStatus(enterprise.getStatus());
                recordFound.setName(enterprise.getName());
                recordFound.setAddress(enterprise.getAddress());
                recordFound.setPhone(enterprise.getPhone());
                Enterprise updated = enterpriseRepository.save(recordFound);
                return ResponseEntity.ok().body(updated);              
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        return enterpriseRepository.findById(id)
            .map(recordFound -> {
                enterpriseRepository.deleteById(id);
                return ResponseEntity.noContent().<Void>build();              
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
