import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard.component';
import { DetencionTotalesComponent } from './detencion-totales/detencion-totales.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EdadPipe } from '../pipes/edad.pipe';
import { DetencionDetalleComponent } from './detencion-detalle/detencion-detalle.component';
import { ReporteDialogComponent } from './reporte-dialog/reporte-dialog.component';



@NgModule({
  declarations: [DashboardComponent, DetencionTotalesComponent, EdadPipe, DetencionDetalleComponent, ReporteDialogComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule, 
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule        
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
