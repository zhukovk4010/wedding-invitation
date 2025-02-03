import {Component, signal} from '@angular/core';
import { MeetingScreenComponent } from "../../components/meeting-screen/meeting-screen.component";

@Component({
  selector: 'app-alena-and-denis',
  imports: [MeetingScreenComponent],
  templateUrl: './alena-and-denis.component.html',
  styleUrl: './alena-and-denis.component.scss'
})
export class AlenaAndDenisComponent {
  isMeetingScreenOpen = signal(true);

  onUnlock() {
    this.isMeetingScreenOpen.set(false);
  }
}
