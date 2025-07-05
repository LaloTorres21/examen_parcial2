import { Component } from '@angular/core';
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { FooterComponent } from "../footer/footer.component";
import { ITachones } from '../interfaces/tachones';
import { TachonesService } from '../services/tachones.service';
import { NgIf, NgFor } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [
    CabeceraComponent,
    FooterComponent,
    NgIf,
    NgFor,
    FormsModule 
  ],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent 
{
  listadoTachoes: ITachones[] = [];
  listadoTachoesFiltrado: ITachones[] = []; 
  isResultLoaded = false;
  isUpdateActive = false;

  filtroModelo: string = ""; 

  constructor(private _tachonesService: TachonesService) {
    this.obtenerListadoTachones();
  }

  obtenerListadoTachones() 
  {
    this._tachonesService.getLit().subscribe({
      next: (data) => {
        this.listadoTachoes = data;
        this.listadoTachoesFiltrado = data; 
        console.log(data);
        this.isResultLoaded = true;
      },
      error: (e) => {
        console.log(e);
        this.isResultLoaded = true; 
      }
    });
  }

  aplicarFiltroModelo() 
  {
    if (!this.filtroModelo)
    {
      this.listadoTachoesFiltrado = this.listadoTachoes; 
    }
     else 
    {
      this.listadoTachoesFiltrado = this.listadoTachoes.filter(tachon =>
        tachon.modelo.toLowerCase().includes(this.filtroModelo.toLowerCase())
      );
    }
  }


  obtenerTachon(data: ITachones) {
 
  }
}