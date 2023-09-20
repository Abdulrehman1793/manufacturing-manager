package com.abdulrehman1793.sbmma.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DataJpaTest(properties = {
        "spring.flyway.enabled=false",
        "spring.jpa.hibernate.ddl-auto=create-drop"})
@Testcontainers
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class WorkOrderRepositoryTest {
    @Container
    static PostgreSQLContainer<?> container = (PostgreSQLContainer<?>) new PostgreSQLContainer("postgres:15.3-alpine3.18")
            .withDatabaseName("test")
            .withUsername("abdul")
            .withPassword("abdul")
            .withReuse(true);

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", container::getJdbcUrl);
        registry.add("spring.datasource.password", container::getPassword);
        registry.add("spring.datasource.username", container::getUsername);
    }

    private final WorkOrderRepository cut;

    @Autowired
    public WorkOrderRepositoryTest(WorkOrderRepository workOrderRepository) {
        this.cut = workOrderRepository;
    }

    @Test
    void notNull() {
        assertNotNull(cut);
    }
}