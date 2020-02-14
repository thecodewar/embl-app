package com.embl.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @author Adarsh Khalique
 *
 */
@Entity
@Data
public class Person {

    @Id
    @Column
    @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private Long age;

    @Column
    private String favouriteColor;

    @Column
    @ElementCollection(targetClass=String.class)
    private List<String> hobby;
}
