import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Test nav</h1>
  <nav>
    <ul>
      <li><a routerLink="/home">Home</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'testapp';
}
