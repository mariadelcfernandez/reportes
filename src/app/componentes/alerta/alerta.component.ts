import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface alerta {
  titulo: string;
  mensaje: string;
}

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: alerta,
  public dialogRef: MatDialogRef<AlertaComponent>) { }


}