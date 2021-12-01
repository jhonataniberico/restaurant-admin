import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './global/guards/auth.guard';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./views/auth/auth.module') },
	{ path: 'home',
		loadChildren: () => import('./views/home/home.module'),

	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
