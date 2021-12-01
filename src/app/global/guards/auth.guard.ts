import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private storageService: StorageService
	){}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.checkLogin();
	}

	private checkLogin(): boolean | UrlTree {
		const token = this.storageService.getLocalItem('token');
		if(token){
			return true;
		}
		this.router.navigate(['']);
		return false
	}



}
