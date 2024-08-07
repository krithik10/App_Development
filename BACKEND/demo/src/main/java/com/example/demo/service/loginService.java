package com.example.demo.service;

import com.example.demo.model.login;
import com.example.demo.repository.loginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class loginService {

    @Autowired
    private loginRepository loginRepository;

    public login registerUser(login user) {
        return loginRepository.save(user);
    }

    public Optional<login> findByUsername(String username) {
        return loginRepository.findByUsername(username);
    }
}
