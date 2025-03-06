import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {

    this.renderer.addClass(this.el.nativeElement, 'hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.el.nativeElement, 'hidden'); // Убираем скрытие
          this.el.nativeElement.classList.add('animate'); // Добавляем класс анимации
        }
      },
      { threshold: 0.3 } // Срабатывает, когда 30% элемента в зоне видимости
    );

    observer.observe(this.el.nativeElement);
  }

}
