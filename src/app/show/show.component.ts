import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

	@Input() thing : {title: string, content: string}
	// 直接获取元素的值 -- 1
	

  constructor() { 
  }

  ngOnInit() {
  }

}
