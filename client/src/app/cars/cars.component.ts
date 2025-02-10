// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
// import { HttpService } from '../../services/http.service';
// import { DatePipe } from '@angular/common';

// @Component({
//   selector: 'app-cars',
//   templateUrl: './cars.component.html',
//   styleUrls: ['./cars.component.scss']
// })
// export class CarsComponent //todo: complete missing code.
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Import AuthService
import { HttpService } from '../../services/http.service';

export class CarsComponent implements OnInit {
  itemForm: FormGroup;

  constructor(

    private fb: FormBuilder,

    private httpService: HttpService,

    private authService: AuthService, // Inject AuthService

    private router: Router

  ) {

    this.itemForm = this.fb.group({

      rentalStartDate: ['', Validators.required],

      rentalEndDate: ['', Validators.required]

    });

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  bookCar(carId: number): void {

    if (this.itemForm.invalid) {

      alert('Please fill in the required dates.');

      return;

    }

    const userId = this.authService.getUserId(); // Get user ID from AuthService

    const bookingDetails = this.itemForm.value;

    this.httpService.bookACar(bookingDetails, userId, carId).subscribe(

      (response) => {

        alert('Car booked successfully!');

      },

      (error) => {

        console.error('Booking failed:', error);

      }

    );

  }

}