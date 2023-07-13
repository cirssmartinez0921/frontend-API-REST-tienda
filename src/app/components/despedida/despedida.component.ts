import { Component } from '@angular/core';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent {
 
  data = [
  {
    title: "Title 1",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aspernatur consectetur cum non natus eum, ea sunt delectus quaerat repellendus incidunt eius esse ex vel ut nihil voluptatum soluta enim?",
    button:"ver mas"
  },
  {
    title: "Title 1",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aspernatur consectetur cum non natus eum, ea sunt delectus quaerat repellendus incidunt eius esse ex vel ut nihil voluptatum soluta enim?",
    button:"ver algo mas"
  },
  {
    title: "Title 1",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aspernatur consectetur cum non natus eum, ea sunt delectus quaerat repellendus incidunt eius esse ex vel ut nihil voluptatum soluta enim?",
    button:"un poco mas"
  },
];
}
