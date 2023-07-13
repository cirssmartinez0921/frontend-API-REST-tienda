import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: "como-quiero", //app-nombre de la component
    templateUrl:"./saludo.component.html",
    styleUrls: ["./saludo.component.css"]
   
})
export class saludo{
    saludo = "hola mundo desde angular";
}