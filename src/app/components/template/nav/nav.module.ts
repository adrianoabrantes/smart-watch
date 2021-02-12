import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HomeModule } from './../../../views/home/home.module';
import { NavComponent } from './nav.component';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    HomeModule
  ], exports: [NavComponent]
})
export class NavModule { }
