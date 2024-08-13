
package com.example.demo.service;

import com.example.demo.model.LoginModel;
import com.example.demo.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    // Create or Register User
    public LoginModel registerUser(LoginModel user) {
        return loginRepository.save(user);
    }

    // Retrieve User by ID
    public Optional<LoginModel> getUserById(Long id) {
        return loginRepository.findById(id);
    }

    // Retrieve User by Email
    public Optional<LoginModel> getUserByEmail(String email) {
        return loginRepository.findByEmail(email);
    }

    // Update User
    public LoginModel updateUser(LoginModel user) {
        return loginRepository.save(user);
    }

    // Delete User by ID
    public void deleteUserById(Long id) {
        loginRepository.deleteById(id);
    }

    // Get All Users
    public List<LoginModel> getAllUsers() {
        return loginRepository.findAll();
    }
}
