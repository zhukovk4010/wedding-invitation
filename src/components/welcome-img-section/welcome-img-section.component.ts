import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-img-section',
  imports: [],
  templateUrl: './welcome-img-section.component.html',
  styleUrl: './welcome-img-section.component.scss'
})
export class WelcomeImgSectionComponent {
  public deviceHeight: number = 0;

  constructor() {
    this.deviceHeight = window.innerHeight;
  }
}
