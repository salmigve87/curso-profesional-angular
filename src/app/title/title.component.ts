// Elemento principal para los componentes de angular, se instala automaticamente con los autogeneradores
import { Component } from '@angular/core';
import { templateJitUrl } from '../../../node_modules/@angular/compiler';


// Decorador de la clase TitleCompomnent
@Component({
    selector: 'title',
    templateUrl: 'title.component.html'
})
export class TitleComponent{
    public name: string = "Miguel";
    public edad: number = 31;
    public edades: number[]; //Asi declaramos arreglos, de cualquier tipo

    getEdadNombre(): string {
        return `${this.name} tiene ${this.edad}`;
    }

}