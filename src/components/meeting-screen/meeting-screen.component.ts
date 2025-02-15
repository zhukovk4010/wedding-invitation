import {Component, ElementRef, HostListener, inject, OnInit, output, Renderer2, signal} from '@angular/core';

@Component({
  selector: 'app-meeting-screen',
  imports: [],
  templateUrl: './meeting-screen.component.html',
  styleUrl: './meeting-screen.component.scss'
})
export class MeetingScreenComponent implements OnInit {
  private _el = inject(ElementRef);
  private _renderer = inject(Renderer2);

  private _isDragging = false;
  private _startX = 0;
  private _offsetX = 0;
  private _maxMove = 0;
  private _clientX = 0;

  public isMeetingScreenHidden = signal(false);

  closeMeetingScreen = output()

  ngOnInit() {
    document.body.style.overflowY = 'hidden';
    const parent = this._el.nativeElement.querySelector('.swipper');
    this._maxMove = parent.clientWidth * 0.8;
  }

  onDragStart(event: TouchEvent) {
    this._isDragging = true;
    this._clientX = this.getClientX(event);
    this._renderer.setStyle(this._el.nativeElement.querySelector('.swipper__button'), 'transition', 'none');
  }

  @HostListener('touchmove', ['$event'])
  onDragMove(event: TouchEvent) {
    if (!this._isDragging) return;

    const clientX = this.getClientX(event);
    this._offsetX = clientX - this._clientX;

    if (this._offsetX < 0) this._offsetX = 0;
    if (this._offsetX > this._maxMove) this._offsetX = this._maxMove;


    this._renderer.setStyle(this._el.nativeElement.querySelector('.swipper__button'), 'left', `${this._offsetX}px`);
  }

  @HostListener('touchend')
  onDragEnd() {
    this._isDragging = false;
    if (this._offsetX >= this._maxMove) {
      this.onUnlock(); // Сообщаем родителю, что разблокировано
    } else {
      this.resetPosition();
    }
  }

  private resetPosition() {
    this._renderer.setStyle(this._el.nativeElement.querySelector('.swipper__button'), 'transition', 'left 0.3s ease');
    this._renderer.setStyle(this._el.nativeElement.querySelector('.swipper__button'), 'left', '0px');
  }

  private getClientX(event: TouchEvent): number {
    return (event as TouchEvent).touches[0].clientX;
  }

  onUnlock() {
    document.body.style.overflowY = 'scroll';
    this.isMeetingScreenHidden.set(true);

    setTimeout(() => {
      this.closeMeetingScreen.emit();
    }, 200)
  }
}
