import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrl: './list-empleados.component.css'
})

export class ListEmpleadosComponent implements OnInit{
  MisEmpleados: Observable<any[]>;

  //Constructor dentro de la clase
  constructor(private firestore: AngularFirestore){
    this.MisEmpleados = this.firestore.collection('MisEmpleados').valueChanges();
  }

  ngOnInit(): void {
      
  }
}
