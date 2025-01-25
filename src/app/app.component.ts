import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopOverlayComponent } from '../components/desktop-overlay/desktop-overlay.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesktopOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public windowWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.windowWidth.set(width);
  }
}
