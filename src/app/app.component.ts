import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LocalStorageService } from 'angular-web-storage';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'viajes_frontend';

  constructor(private localStorage: LocalStorageService) { };

  alert(){
    Swal.fire({
      title: 'Ingrese un filtro',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        const inputValue = result.value;
        // haz algo con el valor del input, por ejemplo:
        console.log(`El usuario ingresó el filtro "${inputValue}"`);
        this.agregar_opcion(inputValue);
      }
    });
  }
  opciones_dropdown = ['Solved', 'Open', 'Pending'];

  datos: any[] = [];
  datosFiltrados: any[] = [];

  get_opciones_dropdown(): string[] {
    const opciones = this.localStorage.get('opciones_dropdown');
    return opciones ? opciones : ['Solved', 'High', 'Pending'];
  }

  guardar_opciones_dropdown(opciones: string[]): void {
    this.localStorage.set('opciones_dropdown', opciones);
  }

  agregar_opcion(nueva_opcion: string): string[] {
    const opciones_dropdown_local = this.get_opciones_dropdown();
    opciones_dropdown_local.push(nueva_opcion);
    this.guardar_opciones_dropdown(opciones_dropdown_local);
    return opciones_dropdown_local;
  };

  datos_tabla = [
    { nombre: 'Andres Gomez', subject: 'I cant login to my account', satisfaction:"100%",priority:"Hight",status:"Solved"},
    { nombre: 'Ezequiel Salatino', subject: 'Categoría 1', satisfaction:"80%",priority:"Medium",status:"Open"},
    { nombre: 'Emiliano Cosenza', subject: 'I cant login to my account', satisfaction:"100%",priority:"Low",status:"Pending"},
  ];

  datosfiltrados = this.datos;

  dropdownOptions = this.get_opciones_dropdown

  opcionesFiltro = ['Todos', 'Open'];
  filtroSeleccionado = '';

  filtrarTabla(opcion: string) {
    this.filtroSeleccionado = opcion;
  }

  /* get datosFiltradosFuncion() {
    if (this.filtroSeleccionado === 'Todos') {
      return this.datos_tabla.filter(dato => dato.nombre);
    } else if (this.filtroSeleccionado === 'Open') {
      return this.datos_tabla.filter(dato => dato.status);
    } else {
      return this.datos_tabla;
    }
  }

  filterText = ''; */


}
