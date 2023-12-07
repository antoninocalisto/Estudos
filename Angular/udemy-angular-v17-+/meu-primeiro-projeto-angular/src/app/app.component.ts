import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1> Curso angular </h1>
  `
})
export class AppComponent {
  title = 'meu-primeiro-projeto-angular';
}
