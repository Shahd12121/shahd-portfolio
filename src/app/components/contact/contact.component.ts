import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Form data, use _replyto for Formspree email field
  formData = { name: '', _replyto: '', message: '' };

  // Flags for form state
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  // Send form data to Formspree
  sendMessage() {
    // Validate fields
    if (!this.formData.name || !this.formData._replyto || !this.formData.message) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    // POST request to Formspree
    this.http.post('https://formspree.io/f/xdklqpew', this.formData, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: () => {
        // Success
        this.isSubmitting = false;
        this.successMessage = 'Message sent successfully!';
        this.formData = { name: '', _replyto: '', message: '' };
      },
      error: () => {
        // Error
        this.isSubmitting = false;
        this.errorMessage = 'Oops! Something went wrong. Please try again.';
      }
    });
  }
}
