import { Component } from '@angular/core';
import { AuthorService } from './author.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authorList:string[]
  title = 'Angular ';
  count:number
  constructor(private autherservice:AuthorService){

  }
  ngOnInit(){
    this.authorList=this.autherservice.getAuthors();
    this.count=this.authorList.length;
  }

}
