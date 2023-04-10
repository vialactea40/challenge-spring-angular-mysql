package com.paulo.back.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity //usado pra definir que essa model eh pra se tornar uma entidade no banco de dados
//@Table(name = "nome da tabela") //usado ao inves do @Entity quando o nome da tabela eh diferente do modelo
public class Enterprise {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long _id;

    @Column(length= 50, nullable= false)
    private String createdBy;

    @CreatedDate
    @Column(nullable= false)
    private LocalDateTime createdDate;

    @Column(length= 50, nullable= false)
    private String modifiedBy;

    @LastModifiedDate
    @Column(nullable= false)
    private LocalDateTime modifiedDate;

    @Column(length= 200, nullable= false)
    private String status;

    @Column(length= 200, nullable= false)
    private String address;

    @Column(length= 200, nullable= false)
    private String name;

    @Column(length= 15, nullable= false)
    private String phone;

}
