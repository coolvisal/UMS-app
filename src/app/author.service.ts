import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthors():string[]{
   return ['Auther 1','Auther 2','Auther 3']
  }
  constructor() { }
}
