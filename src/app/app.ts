import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';







@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ENT04');
}

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule]
})
export class AppModule {}