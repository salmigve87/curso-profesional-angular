// Elemento principal para los componentes de angular, se instala automaticamente con los autogeneradores
import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '../../../node_modules/@angular/compiler';


// Decorador de la clase TitleCompomnent
@Component({
    selector: 'title',
    templateUrl: 'title.component.html'
})

// El OnInit es una interfaz que ayuda a la inyeccion de dependencias, incializando las variables desde alli en principio
// para la parte de pruebas unitarias, tambien se recomienda dejar el constructor limpio para evitar errores
export class TitleComponent implements OnInit{
    public name: string;
    public edad: number;
    public edades: number[]; //Asi declaramos arreglos, de cualquier tipo

    constructor(){}

    ngOnInit(){
        this.name = "Miguel Angel Salazar";
        this.edad = 21;
    }

    getEdadNombre(): string {
        return `${this.name} tiene ${this.edad}`;
    }

}