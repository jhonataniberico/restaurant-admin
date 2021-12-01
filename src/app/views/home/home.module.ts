import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentModule } from 'src/app/global/components/component.module';
import { DataTablesModule } from 'angular-datatables'

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		ComponentModule,
		HomeRoutingModule,
		DataTablesModule
	]
})
export class HomeModule { }
