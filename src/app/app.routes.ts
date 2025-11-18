//import { Router, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component/login.component';
import { RegistroComponent } from './components/registro.component/registro.component';
import { AdminPanelComponent } from './components/admin-panel.component/admin-panel.component';
import { CategoriasComponent } from './components/categorias.component/categorias.component';
import { IndexComponent } from './components/index.component/index.component';
import { ModificarPerfilComponent } from './components/modificar-perfil.component/modificar-perfil.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena.component/recuperar-contrasena.component';



export const routes: Routes = [
    {path: '',component: IndexComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'admin-panel', component: AdminPanelComponent},
    {path: 'categorias/:nombre', component: CategoriasComponent},
    {path: 'modificar-perfil', component: ModificarPerfilComponent},
    {path: 'recuperar-contrasena', component: RecuperarContrasenaComponent},
    { path: '**', redirectTo: '' } // Ruta comodín

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }




