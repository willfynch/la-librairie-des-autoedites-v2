import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { URLS } from './shared/constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('la-librairie-des-autoedites-v2');
  protected readonly http = inject(HttpClient);

  posts: any[] = [];
  protected readonly FORM_LINK = URLS.BOOK_SUBMISSION_FORM;

  ngOnInit() {
    // This data will be fetched at build time
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      this.posts = data.slice(0, 5); // Get first 5 posts
    });
  }
}
