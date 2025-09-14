import {Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {timer} from 'rxjs';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  showPopup = false;

  constructor() {
    timer(10_000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.showPopup = true);
  }

  closePopup() { this.showPopup = false; }
}
