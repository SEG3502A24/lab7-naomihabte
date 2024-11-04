import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authorId: string = '';
  author: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  fetchAuthor() {
    this.http.get(`/api/authors/${this.authorId}`).subscribe(
      (data) => {
        this.author = data;
        this.errorMessage = '';
      },
      (error) => {
        this.author = null;
        this.errorMessage = 'Author not found';
      }
    );
  }
}
