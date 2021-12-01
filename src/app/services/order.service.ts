import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Dish } from '../models/Dish.model';
import { NetworkSuccess } from '../models/Network.model';
import { StorageService } from './storage.service';
import { io, Socket} from 'socket.io-client';

type DishOrder = {
	_id: string
}

@Injectable({
	providedIn: 'root'
})
export class OrderService {

	socket: Socket;

	constructor(
		private http: HttpClient,
		private storageSrv: StorageService
	) {
		this.socket = io(environment.SOCKET_PORT)
	}

	public async createOrder(dishes: any[], quantity: number[] ){

		const token = this.storageSrv.getLocalItem("token")
		console.log(token)

		const order = await this.http.post(
			environment.BASE_URL.concat('order'),
			{ dishes, quantity },
			{
				headers: {
					"Authorization": `${token}`
				}
			}
		).toPromise();

		return order;

	}

	public async getAllDishes(): Promise<Dish[]> {
		const { data } = await this.http.get<NetworkSuccess<Dish[]>>(environment.BASE_URL.concat('dish')).toPromise();
		return data;
	}

	public async deliverFood(id: any) {
		this.socket.emit("foodDelivered", id);
	}

	public getChangeDeliverFood(): Observable<Dish> {
		return Observable.create((subscriber: Subscriber<Dish>) => {
			this.socket.on('foodDeliveredUpdated', data => {
				subscriber.next(data);
			})
		});
	}
}
