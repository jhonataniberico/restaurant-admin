import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishcardComponent } from './dishcard/dishcard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [
		DishcardComponent,
		NavbarComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		NavbarComponent,
		DishcardComponent
	]
})
export class ComponentModule { }
