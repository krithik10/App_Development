
package com.example.demo.controller;

import com.example.demo.model.LoginModel;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000") // Adjust the port to match your frontend
@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private LoginService loginService;

    // Register User
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody LoginModel user) {
        Optional<LoginModel> existingUser = loginService.getUserByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            return ResponseEntity.status(400).body("Email already exists");
        }
        loginService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    // Login User
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginModel user) {
        Optional<LoginModel> existingUser = loginService.getUserByEmail(user.getEmail());

        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    // Get User by ID
    @GetMapping("/users/{id}")
    public ResponseEntity<LoginModel> getUserById(@PathVariable Long id) {
        Optional<LoginModel> user = loginService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get All Users
    @GetMapping("/users")
    public List<LoginModel> getAllUsers() {
        return loginService.getAllUsers();
    }

    // Update User
    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody LoginModel updatedUser) {
        Optional<LoginModel> existingUser = loginService.getUserById(id);

        if (existingUser.isPresent()) {
            LoginModel user = existingUser.get();
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            loginService.updateUser(user);
            return ResponseEntity.ok("User updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete User
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        loginService.deleteUserById(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
