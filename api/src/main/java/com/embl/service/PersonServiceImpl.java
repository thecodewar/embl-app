package com.embl.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.embl.dto.PersonDto;
import com.embl.model.Person;
import com.embl.repository.PersonRepository;
import com.embl.rsql.CustomRsqlVisitor;
import cz.jirutka.rsql.parser.RSQLParser;
import lombok.AllArgsConstructor;
import org.apache.logging.log4j.util.Strings;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityNotFoundException;
import java.util.Optional;

/**
 * @author Adarsh Khalique
 *
 */
@Service
@AllArgsConstructor
public class PersonServiceImpl implements PersonService {

    private PersonRepository personRepository;
    private ObjectMapper objectMapper;
    private RSQLParser rsqlParser;

    /**
     * For given query string and pageable object, find person and filter them using query string.
     * If no query string is provided then simply return all person objects.
     *
     * @param q
     * @param pageable
     * @return page
     */
    @Override
    @Transactional(readOnly = true)
    public Page<PersonDto> getAllPersons(String q, Pageable pageable) {
        return Optional.ofNullable(q)
                .filter(Strings::isNotBlank)
                .map(s -> {
                    Specification<Person> spec = rsqlParser.parse(s).accept(new CustomRsqlVisitor<>());
                    return personRepository.findAll(spec, pageable);
                })
                .orElseGet(() -> personRepository.findAll(pageable))
                .map(this::toDto);

    }

    /**
     * For given id, find person object.
     *
     * @param id
     * @return personDTO
     */
    @Override
    @Transactional
    public PersonDto getPersonById(Long id) {
        return personRepository.findById(id)
                .map(this::toDto)
                .orElseThrow(() -> new EntityNotFoundException("Unable to find Person."));
    }

    /**
     * For given id, delete person object.
     *
     * @param id
     */
    @Override
    @Transactional
    public void deletePerson(Long id) {
        Optional.ofNullable(id)
                .map(i -> personRepository.findById(i).orElseThrow(() -> new EntityNotFoundException("Unable to find Person.")))
                .ifPresent(personRepository::delete);

    }

    /**
     * For given personDto object save record.
     *
     * @param person
     * @return personDTO
     */
    @Override
    @Transactional
    public PersonDto save(PersonDto person) {
        return toDto(personRepository.save(toModel(person)));
    }

    /**
     * For given id and personDTO object, udpate record.
     *
     * @param id
     * @param person
     * @return personDTO
     */
    @Override
    @Transactional
    public PersonDto modify(Long id, PersonDto person) {
        return personRepository.findById(id)
                .map(p -> {
                    person.setId(p.getId());
                    return personRepository.save(toModel(person));
                })
                .map(this::toDto)
                .orElseThrow(() -> new EntityNotFoundException("Unable to find Person."));

    }

    /**
     * Helper method to convert PersonEntity to PersonDto object.
     *
     * @param p
     * @return personDto
     */
    private PersonDto toDto(Person p) {
        return objectMapper.convertValue(p, PersonDto.class);
    }

    /**
     * Helper method to convert personDto object to Person Entity object.
     *
     * @param p
     * @return personDto
     */
    private Person toModel(PersonDto p) {
        return objectMapper.convertValue(p, Person.class);
    }
}