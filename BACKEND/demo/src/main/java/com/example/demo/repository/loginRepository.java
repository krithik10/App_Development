package com.example.demo.repository;

import com.example.demo.model.login;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface loginRepository extends JpaRepository<login, Long> {
    Optional<login> findByUsername(String username);
}
