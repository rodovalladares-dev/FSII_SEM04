import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';



describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //casos de prueba
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  // --- Validaciones de campos ---
  it('el campo nombre debería ser inválido si está vacío', () => {
    const nombre = component.registroForm.get('nombre');
    nombre?.setValue('');
    expect(nombre?.invalid).toBeTrue();
  });

  it('el campo nombre debería ser válido si tiene más de 3 caracteres', () => {
    const nombre = component.registroForm.get('nombre');
    nombre?.setValue('Rodolfo');
    expect(nombre?.valid).toBeTrue();
  });

  it('el campo email debería ser inválido si no es un correo válido', () => {
    const email = component.registroForm.get('email');
    email?.setValue('correo_invalido');
    expect(email?.invalid).toBeTrue();
  });

  it('el campo email debería ser válido si es un correo correcto', () => {
    const email = component.registroForm.get('email');
    email?.setValue('test@correo.com');
    expect(email?.valid).toBeTrue();
  });

  // it('el campo password debería ser inválido si tiene menos de 6 caracteres', () => {
  //   const password = component.registroForm.get('password');
  //   password?.setValue('123');
  //   expect(password?.invalid).toBeTrue();
  // });

  // it('el campo password debería ser válido si cumple las reglas', () => {
  //   const password = component.registroForm.get('password');
  //   password?.setValue('Clave123');
  //   expect(password?.valid).toBeTrue();
  // });

  // it('debería marcar error si las contraseñas no coinciden', () => {
  //   const password = component.registroForm.get('password');
  //   const confirm = component.registroForm.get('confirm_password');

  //   password?.setValue('Clave123');
  //   confirm?.setValue('OtraClave');

  //   fixture.detectChanges();
  //   expect(component.registroForm.errors?.['mismatch']).toBeTruthy();
  // });

  // it('debería ser válido si las contraseñas coinciden', () => {
  //   const password = component.registroForm.get('password');
  //   const confirm = component.registroForm.get('confirm_password');

  //   password?.setValue('Clave123');
  //   confirm?.setValue('Clave123');

  //   fixture.detectChanges();
  //   expect(component.registroForm.errors?.['mismatch']).toBeFalsy();
  //   expect(component.registroForm.valid).toBeTrue();
  // });

  // // --- Métodos ---
  // it('debería llamar al método registrar() al enviar el formulario', () => {
  //   spyOn(component, 'registrar');
  //   component.registroForm.setValue({
  //     nombre: 'Rodolfo',
  //     nacimiento: '1990-01-01',
  //     email: 'test@correo.com',
  //     password: 'Clave123',
  //     confirm_password: 'Clave123'
  //   });

  //   fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit'));
  //   expect(component.registrar).toHaveBeenCalled();
  // });

  // it('debería limpiar el formulario al llamar limpiar()', () => {
  //   component.registroForm.setValue({
  //     nombre: 'Rodolfo',
  //     nacimiento: '1990-01-01',
  //     email: 'test@correo.com',
  //     password: 'Clave123',
  //     confirm_password: 'Clave123'
  //   });

  //   component.limpiar();
  //   expect(component.registroForm.value).toEqual({
  //     nombre: null,
  //     nacimiento: null,
  //     email: null,
  //     password: null,
  //     confirm_password: null
  //   });
  // });
});