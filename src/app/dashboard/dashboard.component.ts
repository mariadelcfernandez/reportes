import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../servicios/api.service';
import { DetencionDetalleComponent } from './detencion-detalle/detencion-detalle.component';
import { Detencion } from "../modelos/detencion.model";
import { Totales } from '../modelos/totales.model';
import { FuncionesService } from '../servicios/funciones.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ReporteDialogComponent } from './reporte-dialog/reporte-dialog.component';
import { AlertaComponent } from '../componentes/alerta/alerta.component';
import { LocalstoreService } from '../servicios/localstore.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class DashboardComponent  implements AfterViewInit {
  detenciones: Detencion[] = [];
  totales: Totales = {
    total_detenciones: 0,    
    total_menores: 0,
    ultima_detencion: null,
    total_por_dependencia: []
  };
  

  //Table with expandable rows
  columnsToDisplay: string[] = ['id', 'fecha', 'persona', 'dias','dependencia','delito','icono'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Detencion | null = null;
  dataSource = new MatTableDataSource<Detencion>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  
  constructor(
    private httpApiService: ApiService,
    private funcionService: FuncionesService,
    private localstoreService: LocalstoreService,
    public dialog: MatDialog,
    ) {}

  ngOnInit(){
    //call this method on component load

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listDetenciones(){
    this.httpApiService.getDetenciones()
    .subscribe((response)=>{

      //ordenar la lista por FECHA
      this.detenciones = response.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

      this.dataSource = new MatTableDataSource<Detencion>(this.detenciones);
      this.dataSource.paginator = this.paginator;


      this.CalcularTotales(this.detenciones);


    })
  }


  esMenor(row: Detencion){
    let edad = this.funcionService.getEdad(row.persona.fecha_nacimiento);
    return edad<18? true: false;
  }

  verDetalle(row: Detencion){
    const dialogRef = this.dialog.open(DetencionDetalleComponent, {
      height: 'auto',
      width: '600px',
      data: row,
    });
  }

  CalcularTotales(detenciones: Detencion[]){
    
    const filtro_dep = new Map(detenciones.map(det => [det.dependencia.dependencia_id, det.dependencia]));
    let dependencias = [...filtro_dep.values()];
    dependencias.map(dep => {
        dep.total = detenciones.filter(det => det.dependencia.dependencia_id === dep.dependencia_id).length
    });

    this.totales = {
      total_detenciones: detenciones.length,
      total_menores: detenciones.filter(det => this.funcionService.getEdad(det.persona.fecha_nacimiento) < 18).length,
      ultima_detencion: detenciones[0].fecha,
      total_por_dependencia: dependencias
    }

    console.log('totales:', this.totales)


  }


  GuardarReporte(){
    
    const dialogRef = this.dialog.open(ReporteDialogComponent, {
          width: '500px',
          height: 'auto'
        })

        dialogRef.afterClosed().subscribe(result => {
          
          if (result) {
            this.totales.observaciones = result;
            this.localstoreService.setLocalStorage('REP_DET', this.totales);

            console.log('REP_DET en localStorage: ',this.localstoreService.getLocalStorage('REP_DET'));

            this.dialog.open(AlertaComponent, {
              data: {titulo: 'Felicidades!', mensaje:'El reporte se guardo con éxito.'},
            });

          }else{
            this.dialog.open(AlertaComponent, {
              data: {titulo: 'Atención!', mensaje:'El reporte no se guardo.'},
            });
          }
          
        });    

  }

  }