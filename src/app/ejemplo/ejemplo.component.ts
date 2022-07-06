import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  hola = 'Hola mundo';
  status: boolean = true;
  data: string[] = [
    'Hola',
    'Mundo',
    'Hola mundo',
    'papa',
    'perro',
    'coca',
    'nene',
    'loco',
    'meme'
  ];// son tus varioable generale que puedes llamar en cualquier lugar del componente
  json = {
    data: [
      { nombre: 'pepe' },
      { nombre: 'andres' },
      { nombre: 'kevin' },
      { nombre: 'juan' },
      { nombre: 'fernando' },
    ]
  }
  @Input() nombre: any; //para traer props
  constructor() { }

  ngOnInit(): void {
  }

  prueba(): void {
    console.log('prueba de click');
  }

}
