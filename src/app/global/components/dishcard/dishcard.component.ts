import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dish } from 'src/app/models/Dish.model';

@Component({
  selector: 'app-dishcard',
  templateUrl: './dishcard.component.html',
  styleUrls: ['./dishcard.component.scss']
})
export class DishcardComponent implements OnInit {

	@Input() dish!: Dish;
	@Output() orderHandler = new EventEmitter();

	constructor() {

	}

	ngOnInit(): void {
	}

	onClickHandler(): void {
		this.orderHandler.emit(this.dish);
	}

}
