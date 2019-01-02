import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatToolbarModule,
    Material.MatSidenavModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatIconModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatToolbarModule,
    Material.MatSidenavModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatIconModule
  ]
})
export class MaterialModule { }
