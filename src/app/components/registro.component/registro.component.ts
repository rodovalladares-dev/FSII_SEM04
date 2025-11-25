import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro.component',
   standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})


export class RegistroComponent {


 registroForm: FormGroup;
   // Variables de feedback visual
  error = '';
  exito = '';
   edadActual = 0;

  constructor(private fb: FormBuilder,private router: Router,) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      nacimiento: ['', Validators.required],
      email: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18),Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]],
      confirm_password: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Validador personalizado para confirmar contraseña
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirm_password')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  // onSubmit() {
  //   if (this.registroForm.valid) {
  //     console.log('Formulario válido:', this.registroForm.value);
  //     // Aquí iría la lógica para enviar datos al backend
  //   } else {
  //     console.log('Formulario inválido');
  //   }
  // }

    limpiar() {
    this.registroForm.reset();
    this.error = '';
    this.exito = '';
    this.edadActual = 0;

  }

// Hasta Aqui


  // ============================================================
  // Registrar usuario
  // ============================================================
  registrar() {
    this.error = '';
    this.exito = '';

    if (this.registroForm.invalid) {
      this.error = 'Debes completar correctamente todos los campos.';
      this.registroForm.markAllAsTouched();
      return;
    }

    const datos = this.registroForm.value;

    const edad = this.calcularEdad(datos.nacimiento);
    if (edad < 13) {
      this.error = 'Debes tener al menos 13 años para registrarte.';
      alert(this.error);
      return;
    }

    const nuevoUsuario = {
      nombre: datos.nombre,
      usuario: datos.usuario,
      email: datos.email,
      password: datos.password,
      direccion: datos.direccion || '',
      tipo: 'usuario'
    };

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    this.exito = 'Usuario registrado con éxito. Ahora puedes iniciar sesión.';

    setTimeout(() => this.router.navigate(['/login']), 1500);
  }

  // Calcular edad final
  private calcularEdad(fecha: string): number {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }








}
