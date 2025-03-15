import {Component, HostListener, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { DesktopOverlayComponent } from '../components/desktop-overlay/desktop-overlay.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesktopOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public windowWidth = signal<number>(window.innerWidth);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const page = params['page'];
      if (page) {
        this.router.navigate([`/${page}`]);
      }
    });
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.windowWidth.set(width);
  }
}
