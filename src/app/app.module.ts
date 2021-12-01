import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './views/auth/auth.module';
import { HomeModule } from './views/home/home.module';
@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AuthModule,
		HomeModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
