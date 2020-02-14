package com.embl.api.controller;

import com.embl.dto.PersonDto;
import com.embl.service.PersonService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * @author Adarsh Khalique
 *
 */
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api/persons")
@AllArgsConstructor
@Slf4j
public class PersonController {

    private PersonService personService;

    /**
     * Fetch all persons
     *
     * @param q
     * @param pageable
     * @return page
     */
    @GetMapping
    public Page<PersonDto> getAllPersons(String q, Pageable pageable) {
        return personService.getAllPersons(q, pageable);
    }

    /**
     * Fetch Person by ID
     *
     * @param id
     * @return personDTO
     */
    @GetMapping("{id}")
    public PersonDto getPersonById(@PathVariable Long id) {
        return personService.getPersonById(id);
    }

    /**
     * Given an personDto object it is validated and saved.
     *
     * @param person
     * @return personDTO
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PersonDto save(@RequestBody @Valid PersonDto person) {
        return personService.save(person);
    }

    /**
     * For given personId, it deletes the record.
     *
     * @param pId
     */
    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public void deletePerson(Long pId) {
        personService.deletePerson(pId);
    }

    /**
     *  For given id and personDTO object, it updates the record.
     *
     * @param id
     * @param person
     * @return personDTO
     */
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public PersonDto modifyPerson(@PathVariable Long id, @RequestBody @Valid PersonDto person) {
        return personService.modify(id, person);
    }
}
