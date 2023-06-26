import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { VehicleRegistryComponent } from './pages/vehicle-registry/vehicle-registry.component';
import { AuthGuard } from './pages/auth/guards';


const routes: Routes = [
 
   
   
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '404'
  },
  
  
 
  {
    path: 'vehicleNumber',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: VehicleRegistryComponent
  }
  // {
  //   path: 'declaration',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   component: DeclarationComponent
  // },
  // {
  //   path: 'Reports',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   component: ReportsComponent
  // },
  // {
  //   path: 'edit/:id',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   component: CdotEditFormComponent
  // },
 

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
