// Elemento principal para los componentes de angular, se instala automaticamente con los autogeneradores
import { Component, OnInit, Input } from '@angular/core';
import { templateJitUrl } from '../../../node_modules/@angular/compiler';
import { Title } from '../../../node_modules/@angular/platform-browser';


// Decorador de la clase TitleCompomnent
@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    //styles: ["h1{font-family: Roboto;}", "h2{text-decoration: underline;}"],
    styleUrls: ["Title.component.css"]
})

// El OnInit es una interfaz que ayuda a la inyeccion de dependencias, incializando las variables desde alli en principio
// para la parte de pruebas unitarias, tambien se recomienda dejar el constructor limpio para evitar errores
export class TitleComponent implements OnInit{
    public name: string;
    public edad: number;
    public edades: number[]; //Asi declaramos arreglos, de cualquier tipo

    public isAvailable: boolean = false ; // se paso a false para poder ver la funcionalidad del launchDate

    public moreInformation: boolean = false;

    public topics: string[];

    public category: string; //mobile, web, other

    public lauchDate: Date;

    public price: number = 25;

    public seconds: number = 3600;

    @Input() suscribed: boolean;
 
    constructor(){}

    ngOnInit(){
        this.category = "webb";
        this.name = "Miguel Angel Salazar";
        this.lauchDate = new Date(2018, 11,25);
        this.topics = [
            "Fundamentos del Frameworks",
            "Componentes",
            "Directivas",
            "Animaciones",
            "Servicios",
            "RxJS",
            "Biding"
        ]

    }

    getEdadNombre(): string {
        return `${this.name} tiene ${this.edad}`;
    }

    toggleMoreInformation(){
        this.moreInformation = !this.moreInformation;
    }
}