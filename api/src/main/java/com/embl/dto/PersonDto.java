package com.embl.dto;

import lombok.Data;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * @author Adarsh Khalique
 *
 */
@Data
public class PersonDto {

    private Long id;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @Max(value = 150)
    private Long age;

    private String favouriteColor;

    private List<String> hobby;

}
