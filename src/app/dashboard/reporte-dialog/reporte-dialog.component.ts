import { Component, OnInit,  Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AlertaComponent } from 'src/app/componentes/alerta/alerta.component';

@Component({
  selector: 'app-reporte-dialog',
  templateUrl: './reporte-dialog.component.html',
  styleUrls: ['./reporte-dialog.component.css']
})
export class ReporteDialogComponent implements OnInit {

  observaciones = new FormControl(null, Validators.required);

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ReporteDialogComponent>) {}

  ngOnInit(): void {
  }


  cancelar(): void {
    this.dialogRef.close();
  }

  guardar(){

    console.log(this.observaciones)

    if (this.observaciones.hasError('required')) {
      
      this.dialog.open(AlertaComponent, {
        data: {titulo: 'Error!', mensaje:'La observación es requerida para guardar el reporte.'},
      });

    }else{
      this.dialogRef.close(this.observaciones.value);
    }    
  }

}
