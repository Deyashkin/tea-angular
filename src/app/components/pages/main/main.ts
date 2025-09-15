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
  currentSlide = 0;

  slides = [
    {
      img: "slider-image-1.png",
      alt: "Slide 1",
      title: "Скидки на травянные чаи",
      description: "Узнай все подробности, заполнив заявку",
      buttonText: "Заполнить",
      colClass: "col-7"
    },
    {
      img: "slider-image-2_2.png",
      alt: "Slide 2",
      title: "Закажи три пачки чая<br>и получи подарок",
      description: "",
      buttonText: "Заполнить",
      colClass: "col-7"
    },
    {
      img: "slider-image-3.png",
      alt: "Slide 3",
      title: "Попробуй нашу новинку — ягодный чай",
      description: "",
      buttonText: "Заказать",
      colClass: "col-5"
    }
  ];

  private intervalId: any;


  constructor() {
    timer(10_000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.showPopup = true);
  }

  ngOnInit() {
    this.startSlider();

    // Инициализация WOW.js
    if (typeof (window as any).WOW === 'function') {
      new (window as any).WOW({
        animateClass: 'animate__animated',
      }).init();
    }
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Смена слайда каждые 5 секунд
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  closePopup() { this.showPopup = false; }

  openFaq = signal<number | null>(0);  // какой пункт открыт (по умолчанию 0) или null

  toggleFaq(i: number) {
    const cur = this.openFaq();
    this.openFaq.set(cur === i ? null : i); // клик по открытому — закрываем
  }

  isOpen(i: number) {
    return this.openFaq() === i;
  }
}
