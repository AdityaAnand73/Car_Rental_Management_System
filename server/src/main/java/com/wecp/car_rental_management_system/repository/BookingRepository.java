package com.wecp.car_rental_management_system.repository;


import com.wecp.car_rental_management_system.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Long>{
    // implement jpa repository here
    @Query("UPDATE Booking b SET b.status = :status WHERE b.id = :id")
    int updateBookingStatus(@Param("id") Long id, @Param("status") String status);
}
