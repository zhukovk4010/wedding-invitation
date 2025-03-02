import { Component } from '@angular/core';
import {ScrollAnimateDirective} from '../../animation/scroll-animate.directive';

@Component({
  selector: 'app-faq-section',
  imports: [ScrollAnimateDirective],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {

}
