package com.paulo.back.model;

import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity //usado pra definir que essa model eh pra se tornar uma entidade no banco de dados
//@Table(name = "nome da tabela") //usado ao inves do @Entity quando o nome da tabela eh diferente do modelo
public class Employee {
     
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long _id;

    @Column(length= 50, nullable= true)
    private String createdBy;

    @Column(nullable= true)
    private Date createdDate;

    @Column(length= 50, nullable= true)
    private String modifiedBy;

    @Column(nullable= true)
    private LocalDateTime modifiedDate;

    @Column(length= 200, nullable= false)
    private String status;

    @Column(length= 3, nullable= false)
    private Integer age;

    @Column(length= 200, nullable= false)
    private String email;

    @Column(length= 200, nullable= false)
    private String name;

    @Column(length= 200, nullable= false)
    private String position;

    @Column(length= 200, nullable= false)
    private String surname;
}
