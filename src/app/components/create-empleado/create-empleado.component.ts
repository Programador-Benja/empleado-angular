import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../service/empleado.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrl: './create-empleado.component.css'
})
export class CreateEmpleadoComponent implements OnInit{
  createEmpleado: FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder,
    private _empleadoService: EmpleadoService,
    private toastr: ToastrService){
    this.createEmpleado = this.fb.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
    });
    }

    agregarEmpleado(){
    this.submitted = true;
    if(this.createEmpleado.invalid){
      this.toastr.error('Hubo un error al registrar el empleado', 'Error');
      return;
    }

    const empleado: any = {
        nombre: this.createEmpleado.value.nombre,
        apellido: this.createEmpleado.value.apellido,
        email: this.createEmpleado.value.email,
    }

    this._empleadoService.agregarEmpleado(empleado).then(()=>{
        this.toastr.success('El empleado fue registrado con exito!', 'Empleado Registrado');
    })
    // .catch(error=>{
    //     console.log(error)
    //     this.toastr.error('Hubo un error al registrar el empleado', 'Error');
    // })
  }
  
  ngOnInit(): void {
        
  }
}
