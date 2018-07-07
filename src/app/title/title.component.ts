// Elemento principal para los componentes de angular, se instala automaticamente con los autogeneradores
import { Component } from '@angular/core';
import { templateJitUrl } from '../../../node_modules/@angular/compiler';


// Decorador de la clase TitleCompomnent
@Component({
    selector: 'title',
    template: `
        <h1>Curso Profesional Angular</h1>
    `
})
export class TitleComponent{


}