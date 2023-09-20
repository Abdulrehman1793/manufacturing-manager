package com.abdulrehman1793.sbmma.model.enums;

import java.time.LocalDate;

public enum DateRange {
    THIS_MONTH(LocalDate.now().withDayOfMonth(1), LocalDate.now()),
    LAST_MONTH(LocalDate.now().minusMonths(1).withDayOfMonth(1), LocalDate.now().minusMonths(1).withDayOfMonth(LocalDate.now().minusMonths(1).lengthOfMonth())),
    THIS_YEAR(LocalDate.now().withDayOfYear(1), LocalDate.now()),
    LAST_YEAR(LocalDate.now().minusYears(1).withDayOfYear(1), LocalDate.now().minusYears(1).withDayOfYear(LocalDate.now().minusYears(1).lengthOfYear())),
    TODAY(LocalDate.now(), LocalDate.now()),
    LAST_7_DAYS(LocalDate.now().minusDays(6), LocalDate.now()),
    LAST_15_DAYS(LocalDate.now().minusDays(14), LocalDate.now());

    private final LocalDate startDate;
    private final LocalDate endDate;

    DateRange(LocalDate startDate, LocalDate endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }
}
