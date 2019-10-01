import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'page01', loadChildren: './pages/page01/page01.module#Page01PageModule' },
  { path: 'page02', loadChildren: './pages/page02/page02.module#Page02PageModule' },
  { path: 'page03', loadChildren: './pages/page03/page03.module#Page03PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
