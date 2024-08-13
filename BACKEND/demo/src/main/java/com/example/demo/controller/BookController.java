package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.service.BookService;

@RestController
@RequestMapping("/bookings")
public class BookController {

    @Autowired
    private BookService bookService;

    // Create or Save Booking
    @PostMapping
    public ResponseEntity<Book> createBooking(@RequestBody Book book) {
        Book savedBook = bookService.saveBooking(book);
        return ResponseEntity.ok(savedBook);
    }

    // Get Booking by ID
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookingById(@PathVariable Long id) {
        Optional<Book> booking = bookService.getBookingById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get All Bookings
    @GetMapping
    public List<Book> getAllBookings() {
        return bookService.getAllBookings();
    }

    // Update Booking
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBooking(@PathVariable Long id, @RequestBody Book updatedBook) {
        Optional<Book> existingBook = bookService.getBookingById(id);

        if (existingBook.isPresent()) {
            Book book = existingBook.get();
            book.setFullName(updatedBook.getFullName());
            book.setEmail(updatedBook.getEmail());
            book.setPhone(updatedBook.getPhone());
            book.setBookingDate(updatedBook.getBookingDate());
            book.setAdditionalMessage(updatedBook.getAdditionalMessage());
            Book savedBook = bookService.updateBooking(book);
            return ResponseEntity.ok(savedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete Booking
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookService.deleteBookingById(id);
        return ResponseEntity.ok().build();
    }
}
