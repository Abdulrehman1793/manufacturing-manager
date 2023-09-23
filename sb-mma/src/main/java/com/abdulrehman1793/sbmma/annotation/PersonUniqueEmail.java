package com.abdulrehman1793.sbmma.annotation;

import com.abdulrehman1793.sbmma.annotation.validator.PersonUniqueEmailValidator;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = PersonUniqueEmailValidator.class)
@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface PersonUniqueEmail {
    String message() default "Email must be unique";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
