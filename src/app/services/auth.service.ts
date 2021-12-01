import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private _http : HttpClient
	) { }

	// HTTP CLIENT
	public logIn(email: string, password: string){
		const userData = this._http.post(
			`${environment.BASE_URL}auth`,
			{ email, password }
		);
		return userData;
	}

	// FETCH - JS PURO
	public async logInWithFetch(email: string, password: string): Promise<any> {
		const bodyData = { email, password }
		const userData = await fetch(`${environment.BASE_URL}auth`, {
			body: JSON.stringify(bodyData),
			method: 'POST',
		});

		return userData;
	}

/*	public examplePromise(){
		return new Promise((resolve, reject) => {
			try {
				// HACER UNA PETICION
				setTimeout(() => {
					resolve(123);
					console.log("se envio la data")
				}, 1000);

			} catch (error) {
				reject(error);
			}
		})
	}
*/
}
