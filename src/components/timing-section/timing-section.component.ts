import { Component } from '@angular/core';
import { ScrollAnimateDirective} from '../../animation/scroll-animate.directive';

@Component({
  selector: 'app-timing-section',
  imports: [ScrollAnimateDirective],
  templateUrl: './timing-section.component.html',
  styleUrl: './timing-section.component.scss',
})
export class TimingSectionComponent {

}
