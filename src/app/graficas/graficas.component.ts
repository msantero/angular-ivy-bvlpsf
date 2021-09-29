import {
  Component,
  Input,
  Output,
  OnInit,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Paquete, PaqueteCantPersonas } from '../paquetes';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
})
export class GraficasComponent implements OnInit {
  @Input() paquetes!: PaqueteCantPersonas[];
  @Output() notify = new EventEmitter();
  //paquetesgrafica: Paquete[] | any;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  paquetesnombre = this.paquetes.map((paq) => paq.nombre);
  paquetescantventas = this.paquetes.map((paq) => paq.cantidad_ventas);

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Cantidad',
          data: this.paquetescantventas,
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
      },
      title: {
        text: 'Gráfica de Columnas',
      },
      xaxis: {
        categories: this.paquetesnombre,
      },
    };
  }

  ngOnInit() {}
}
