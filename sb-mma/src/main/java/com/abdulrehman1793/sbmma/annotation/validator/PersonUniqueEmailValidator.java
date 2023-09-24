package com.abdulrehman1793.sbmma.annotation.validator;

import com.abdulrehman1793.sbmma.annotation.PersonUniqueEmail;
import com.abdulrehman1793.sbmma.services.PersonService;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PersonUniqueEmailValidator implements ConstraintValidator<PersonUniqueEmail, String> {

    private final PersonService personService;

    public PersonUniqueEmailValidator(PersonService personService) {
        this.personService = personService;
    }

    @Override
    public void initialize(PersonUniqueEmail constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return !personService.isEmailAlreadyExists(value);
    }
}
