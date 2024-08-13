

package com.example.demo.repository;

import com.example.demo.model.LoginModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginRepository extends JpaRepository<LoginModel, Long> {
    Optional<LoginModel> findByEmail(String email);
}
