import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	loginForm: FormGroup;

	constructor(
		private frmBuilder: FormBuilder,
		private authService: AuthService,
		private storageService: StorageService,
		private route: Router,
		private location : Location
	) {
		this.loginForm = this.frmBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.minLength(6), Validators.required]]
		});
	}

	ngOnInit(): void {
	}

	login(): void {
		// console.log("numero 1");
		// const data = await this.authService.examplePromise();
		// console.log(data);
		// console.log("numero 2");
		const { email, password } = this.loginForm.controls;
		const user = this.authService.logIn(email.value, password.value);
		user.subscribe(
			(response : any) => {
				this.storageService.setLocalItem('token', response.data.token )
				this.route.navigate(['/home'])
				console.log("usuario: ", response)
			},
			err => {},
			() => {}
		);
	}

	showMessage(validation: any): string{
		if(validation){
			const propertiesNames = Object.keys(validation);
			if(propertiesNames.includes('required')){
				return "El email es requerido"
			}
			if(propertiesNames.includes('email')){
				return "El email es inválido"
			}
		}
		return "";
	}
}
