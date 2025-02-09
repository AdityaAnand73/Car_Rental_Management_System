package com.wecp.car_rental_management_system.service;

import com.wecp.car_rental_management_system.entity.Booking;
import com.wecp.car_rental_management_system.entity.Payment;
import com.wecp.car_rental_management_system.repository.BookingRepository;
import com.wecp.car_rental_management_system.repository.PaymentRepository;
import com.wecp.car_rental_management_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService{
    
    PaymentRepository paymentRepository;
    Booking Repository bookingRepository;
    @Autowired
    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public Payment createPayment(Long BookingId,Payment payment){
            Booking booking = bookingRepository.findById(BookingId);
            payment.setBooking(booking);
            return paymentRepository.save(payment);

    }

    public Payment getPaymentByBookingId(Long bookingId){
        return paymentRepository.findPaymentByBookingId(bookingId);
    }

    public List<Payment> getAllPayment(){
        return paymentRepository.findAll();
    }
}
