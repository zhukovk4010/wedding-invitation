import {Component, signal} from '@angular/core';
import { MeetingScreenComponent } from "../../components/meeting-screen/meeting-screen.component";
import {WelcomeSectionComponent} from '../../components/welcome-section/welcome-section.component';
import {usersData} from '../../data/usersData';
import {TimingSectionComponent} from '../../components/timing-section/timing-section.component';
import {WelcomeImgSectionComponent} from '../../components/welcome-img-section/welcome-img-section.component';
import {PlaceSectionComponent} from '../../components/place-section/place-section.component';

@Component({
  selector: 'app-alena-and-denis',
  imports: [MeetingScreenComponent, WelcomeSectionComponent, TimingSectionComponent, WelcomeImgSectionComponent, PlaceSectionComponent],
  templateUrl: './alena-and-denis.component.html',
  styleUrl: './alena-and-denis.component.scss'
})
export class AlenaAndDenisComponent {
  isMeetingScreenOpen = signal(true);

  onUnlock() {
    this.isMeetingScreenOpen.set(false);
  }

  protected readonly usersData = usersData;
}
