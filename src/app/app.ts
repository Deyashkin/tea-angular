import { Component, signal } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './components/common/header/header';
import {Footer} from './components/common/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}

