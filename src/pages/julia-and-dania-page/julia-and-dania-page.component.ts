import {Component, signal} from '@angular/core';
import {usersData} from '../../data/usersData';
import {MeetingScreenComponent} from '../../components/meeting-screen/meeting-screen.component';
import {WelcomeImgSectionComponent} from '../../components/welcome-img-section/welcome-img-section.component';
import {WelcomeSectionComponent} from '../../components/welcome-section/welcome-section.component';
import {DressCodeSectionComponent} from '../../components/dress-code-section/dress-code-section.component';
import {FaqSectionComponent} from '../../components/faq-section/faq-section.component';
import {FormSectionComponent} from '../../components/form-section/form-section.component';
import {PlaceSectionComponent} from '../../components/place-section/place-section.component';
import {TimingSectionComponent} from '../../components/timing-section/timing-section.component';

@Component({
  selector: 'app-julia-and-dania-page',
  imports: [
    MeetingScreenComponent,
    WelcomeImgSectionComponent,
    WelcomeSectionComponent,
    DressCodeSectionComponent,
    FaqSectionComponent,
    FormSectionComponent,
    PlaceSectionComponent,
    TimingSectionComponent
  ],
  templateUrl: './julia-and-dania-page.component.html',
  styleUrl: './julia-and-dania-page.component.scss'
})
export class JuliaAndDaniaPageComponent {
  isMeetingScreenOpen = signal(true);

  onUnlock() {
    this.isMeetingScreenOpen.set(false);
  }

  protected readonly usersData = usersData;
}
