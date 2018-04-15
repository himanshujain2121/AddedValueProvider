import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Posts } from './posts';
import { VALUE_PROVIDER } from '../valueProvider/valueProvider';

@Injectable()
export class PostsService {

  apiBaseUrl: string;

  constructor(private http: HttpClient, @Inject(VALUE_PROVIDER) private valueProvider: any) {
    this.apiBaseUrl = this.valueProvider.apiUrl;
  }

  getPosts() {
    return this.http.get<Posts[]>(this.apiBaseUrl + 'posts',
      { headers: new HttpHeaders().set('authKey', 'fsdfjdgsf435345hjk').set('authpwd', 'fdsfdsf') });
  }

  addPost(post: Posts) {
    // let post: Posts = { title: 'Test', body: 'Test Body', userId: 3 };
    return this.http.post<Posts>(this.apiBaseUrl +'posts', post);
  }

  updatePost() {
    let post: Posts = { id: 2, userId: 1, body: 'Test Update', title: 'Test Update' };
    return this.http.put(this.apiBaseUrl +'posts/2', post);
  }

  deletePost() {
    return this.http.delete(this.apiBaseUrl +'posts/2');
  }

  getPhotos() {
    const request = new HttpRequest('GET', this.apiBaseUrl +'photos',
      { reportProgress: true });
    return this.http.request(request);
  }

}
