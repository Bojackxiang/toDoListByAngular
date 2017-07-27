import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
	
	// GET THE FORMAT OF FORM
	title="";
	content="";

	// 没有用， 应为初始化的时候这个为空，那么就一直为空
	send_data = {title: this.title, content: this.content}

	// TEH FORMAT OF SENT DATA
	@Output() sendingData = new EventEmitter<{title:string, content:string}>();

  	constructor() { }	

  	ngOnInit() {
  	}

  	buttonClick(){
  		this.sendingData.emit({title: this.title, content: this.content});
  	}

}
