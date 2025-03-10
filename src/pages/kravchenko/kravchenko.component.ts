import {Component, signal} from '@angular/core';
import {usersData} from '../../data/usersData';
import {MeetingScreenComponent} from '../../components/meeting-screen/meeting-screen.component';
import {WelcomeImgSectionComponent} from '../../components/welcome-img-section/welcome-img-section.component';
import {WelcomeSectionComponent} from '../../components/welcome-section/welcome-section.component';
import {TimingSectionComponent} from '../../components/timing-section/timing-section.component';
import {PlaceSectionComponent} from '../../components/place-section/place-section.component';
import {DressCodeSectionComponent} from '../../components/dress-code-section/dress-code-section.component';
import {FaqSectionComponent} from '../../components/faq-section/faq-section.component';
import {FormSectionComponent} from '../../components/form-section/form-section.component';

@Component({
  selector: 'app-kravchenko',
  imports: [
    MeetingScreenComponent,
    WelcomeImgSectionComponent,
    WelcomeSectionComponent,
    TimingSectionComponent,
    PlaceSectionComponent,
    DressCodeSectionComponent,
    FaqSectionComponent,
    FormSectionComponent
  ],
  templateUrl: './kravchenko.component.html',
  styleUrl: './kravchenko.component.scss'
})
export class KravchenkoComponent {
  isMeetingScreenOpen = signal(true);

  onUnlock() {
    this.isMeetingScreenOpen.set(false);
  }

  protected readonly usersData = usersData;
}
