import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent {
  title = 'app';

  // TO DO LIST
  items = [{title:"Reading Book", content:"Read and learn something today"},
           {title:"Doing Home work", content:"I need to finish it"}];

  add_item(event){
  	this.items.push({title:event.title, content:event.content});
  }

}
