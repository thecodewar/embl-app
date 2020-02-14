package com.embl.service;

import com.embl.dto.PersonDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Adarsh Khalique
 *
 */
public interface PersonService {

    Page<PersonDto> getAllPersons(String q, Pageable pageable);
    PersonDto getPersonById(Long id);
    void deletePerson(Long id);
    PersonDto save(PersonDto person);
    PersonDto modify(Long id, PersonDto person);
}
