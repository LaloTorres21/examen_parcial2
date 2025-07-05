import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BuscadorComponent } from './buscador/buscador.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            RouterLink,
            HttpClientModule, 
            CabeceraComponent, 
            FooterComponent, 
            InicioComponent,
            BuscadorComponent,
            ListadoProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tachones';
}
