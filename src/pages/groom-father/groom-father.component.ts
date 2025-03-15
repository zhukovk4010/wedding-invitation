import {Component, signal} from '@angular/core';
import {usersData} from '../../data/usersData';
import {DressCodeSectionComponent} from '../../components/dress-code-section/dress-code-section.component';
import {FaqSectionComponent} from '../../components/faq-section/faq-section.component';
import {FormSectionComponent} from '../../components/form-section/form-section.component';
import {MeetingScreenComponent} from '../../components/meeting-screen/meeting-screen.component';
import {PlaceSectionComponent} from '../../components/place-section/place-section.component';
import {TimingSectionComponent} from '../../components/timing-section/timing-section.component';
import {WelcomeImgSectionComponent} from '../../components/welcome-img-section/welcome-img-section.component';
import {WelcomeSectionComponent} from '../../components/welcome-section/welcome-section.component';

@Component({
  selector: 'app-groom-father',
  imports: [
    DressCodeSectionComponent,
    FaqSectionComponent,
    FormSectionComponent,
    MeetingScreenComponent,
    PlaceSectionComponent,
    TimingSectionComponent,
    WelcomeImgSectionComponent,
    WelcomeSectionComponent
  ],
  templateUrl: './groom-father.component.html',
  styleUrl: './groom-father.component.scss'
})
export class GroomFatherComponent {
  isMeetingScreenOpen = signal(true);

  onUnlock() {
    this.isMeetingScreenOpen.set(false);
  }

  protected readonly usersData = usersData;
}
