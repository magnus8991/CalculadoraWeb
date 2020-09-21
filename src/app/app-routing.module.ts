import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DivisionComponent } from './division/division.component';
import { InicioComponent } from './inicio/inicio.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { RestaComponent } from './resta/resta.component';
import { SumaComponent } from './suma/suma.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'inicio', component: InicioComponent },
    { path: 'suma', component: SumaComponent },
    { path: 'resta', component: RestaComponent },
    { path: 'multiplicacion', component: MultiplicacionComponent },
    { path: 'division', component: DivisionComponent },
    { path: '', component: InicioComponent }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
