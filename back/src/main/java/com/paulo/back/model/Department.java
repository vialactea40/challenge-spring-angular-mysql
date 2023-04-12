package com.paulo.back.model;

import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity //usado pra definir que essa model eh pra se tornar uma entidade no banco de dados
//@Table(name = "nome da tabela") //usado ao inves do @Entity quando o nome da tabela eh diferente do modelo

public class Department {
    
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

    @Column(length= 200, nullable= false)
    private String description;

    @Column(length= 200, nullable= false)
    private String name;

    @Column(length= 15, nullable= false)
    private String phone; 

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "enterprise_id")
    private Enterprise enterprise;

}
