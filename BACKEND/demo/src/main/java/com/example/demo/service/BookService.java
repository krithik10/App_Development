package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // Create or Save Booking
    public Book saveBooking(Book book) {
        return bookRepository.save(book);
    }

    // Retrieve Booking by ID
    public Optional<Book> getBookingById(Long id) {
        return bookRepository.findById(id);
    }

    // Retrieve All Bookings
    public List<Book> getAllBookings() {
        return bookRepository.findAll();
    }

    // Update Booking
    public Book updateBooking(Book book) {
        return bookRepository.save(book);
    }

    // Delete Booking by ID
    public void deleteBookingById(Long id) {
        bookRepository.deleteById(id);
    }
}
