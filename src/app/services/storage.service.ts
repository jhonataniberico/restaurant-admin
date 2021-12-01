import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor() { }

	// Local Storage
	public setLocalItem(name: string, item: any): void {
		try {
			localStorage.setItem(name, JSON.stringify(item));
		} catch (error) {
			throw Error('Ha ocurrido un error al guardar el item')
		}
	}

	public getLocalItem(name: string): any {
		try {
			const value = localStorage.getItem(name);
			if(value == null){
				return null;
			}
			return value
		} catch (error) {
			throw Error('Ha ocurrido un error al obtener el item')
		}
	}

	// Sesion Storage
	public setSessionItem(name: string, item: any): void {
		try {
			sessionStorage.setItem(name, JSON.stringify(item));
		} catch (error) {
			throw Error('Ha ocurrido un error al guardar el item')
		}
	}

	public getSessionItem(name: string): any {
		try {
			const value = sessionStorage.getItem(name);
			if(value == null){
				throw Error( "no se ha encontrado el elemento");
			}
			return value
		} catch (error) {
			throw Error('Ha ocurrido un error al obtener el item')
		}
	}

}
