import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

interface Formulario {
  nombres: string;
  apellidos: string;
  ciudad: string;
  celular: number;
  edad: number;
  correo: string;
  educacion: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
})
export class FormComponent implements OnInit {

  model = new FormGroup({
    nombres: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
    ciudad: new FormControl(),
    celular:new FormControl(),
    edad:new FormControl(),
    correo: new FormControl(),
    educacion: new FormControl(),
  });
  
  constructor() {
  
  }

  ngOnInit(): void {
   
  }

  get f(){

    return this.model.controls;

  }

  onSubmit() {
    Swal.fire('Registro exitoso...', '', 'success')
  }
}
