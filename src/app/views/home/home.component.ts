import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Dish } from 'src/app/models/Dish.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	dishes: Dish[] = [];
	car: {_id: string}[] = [];
	quantity: number[] = [];

	constructor(
		private orderService: OrderService,
		private route: Router
	) { }

	ngOnInit(): void {
		this.orderService.getAllDishes().then(dishes => {
			// Forma de obtener parametros simples
			// const variablePrueba = dishes.map((dish) => {
			// 	const { name, picture, price, description } = dish;
			// 	return { name, picture, price, description }
			// });
			// console.log(variablePrueba);

			this.dishes = dishes;
			const foodHandler$ = this.orderService.getChangeDeliverFood();

			foodHandler$.subscribe({
				next: (value) => {
					const index = this.dishes.findIndex(dish => dish._id === value._id);
					if(index >= 0){
						this.dishes[index].delivered = value.delivered;
					}
					console.log("vlaor por medio del socket: ", value);

				}
			})


		})
	}

	setToCar(dish: Dish): void {
		const index = this.car.findIndex((order) => order._id === dish._id);
		if(index >= 0){
			this.quantity[index] = this.quantity[index]+1
			return;
		}
		this.car.push({_id: dish._id!});
		this.quantity.push(1);
	}

	createOrder(): void {
		console.log("car: ", this.car);
		console.log("quanity: ", this.quantity);
		this.orderService.createOrder(this.car, this.quantity).then(res => {
		})

		this.car.forEach((item) => {
			const dish = this.dishes.find(el => el._id === item._id);
			if(dish){
				this.orderService.deliverFood(dish);
			}
			const index = this.dishes.findIndex(dish => dish._id === item._id);
			if(index >= 0){
				this.dishes[index].delivered++;
			}
		});
	}

}
