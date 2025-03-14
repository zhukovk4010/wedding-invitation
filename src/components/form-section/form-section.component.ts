import {Component, inject, input, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-form-section',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent implements OnInit {
  private _contactService = inject(ContactService);

  options = ['Красное вино', 'Белое вино (сухое)', 'Белое вино (полусладкое)', 'Водка', 'Виски', 'Коньяк', 'Не пью']

  public numberOfPerson = input.required<number>();
  public firstPerson = input.required<string>();
  public secondPerson = input<string>();

  public bolshakova = input<boolean>(false);

  public canViewTelegram = input<boolean>();

  public alcoholSelector1IsVisible = signal(false);
  public alcoholSelector2IsVisible = signal(false);

  public notWillBe1 = signal(false);
  public notWillBe2 = signal(false);

  public isSuccessResponse = signal(false);
  public isErrorResponse = signal(false);

  public formOnePerson = new FormGroup({
    personName: new FormControl(''),
    willBe: new FormControl<boolean | null>(null),
    alcohol: new FormControl<string | null>(null),
    allergy: new FormControl(''),
  })

  public formTwoPerson = new FormGroup({
    personName: new FormControl(''),
    willBe: new FormControl<boolean | null>(null),
    alcohol: new FormControl<string | null>(null),
    allergy: new FormControl(''),
    secondPersonName: new FormControl(''),
    secondWillBe: new FormControl<boolean | null>(null),
    secondAlcohol: new FormControl<string | null>(null),
    secondAllergy: new FormControl(''),
  })

  ngOnInit(): void {
    if (this.numberOfPerson() === 1) {
      this.formOnePerson.controls.personName.setValue(this.firstPerson());
      return
    }
    if (this.numberOfPerson() === 2) {
      this.formTwoPerson.controls.personName.setValue(this.firstPerson());
      this.formTwoPerson.controls.secondPersonName.setValue(this.secondPerson()!);
      return
    }
  }

  public onSubmitOnePerson() {
    this._contactService.sendForm(this.formOnePerson.value).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.isSuccessResponse.set(true)
        }
      },
      error: err => {
        this.isErrorResponse.set(true)
      }
    })
  }

  public onSubmitTwoPerson() {
    this._contactService.sendForm(this.formTwoPerson.value).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.isSuccessResponse.set(true)
        }
      },
      error: err => {
        this.isErrorResponse.set(true)
      }
    })
  }

  public onConfirmation1() {
    if (this.numberOfPerson() === 1) {
      this.alcoholSelector1IsVisible.set(true)
      this.formOnePerson.controls.willBe.setValue(true);
      this.notWillBe1.set(false)
      return;
    }

    if (this.numberOfPerson() === 2) {
      this.alcoholSelector1IsVisible.set(true)
      this.formTwoPerson.controls.willBe.setValue(true);
      this.notWillBe1.set(false)
      return;
    }

  }

  public onConfirmation2() {
    this.alcoholSelector2IsVisible.set(true)
    this.formTwoPerson.controls.secondWillBe.setValue(true);
    this.notWillBe2.set(false)
    return;
  }

  public onRefusal1() {
    if (this.numberOfPerson() === 1) {
      this.formOnePerson.controls.willBe.setValue(false);
      this.formOnePerson.controls.alcohol.setValue(null);
      this.alcoholSelector1IsVisible.set(false)
      this.notWillBe1.set(true)
      return;
    }

    if (this.numberOfPerson() === 2) {
      this.formTwoPerson.controls.willBe.setValue(false);
      this.formTwoPerson.controls.alcohol.setValue(null);
      this.alcoholSelector1IsVisible.set(false)
      this.notWillBe1.set(true)
    }
  }

  public onRefusal2() {
    this.formTwoPerson.controls.secondWillBe.setValue(false);
    this.formTwoPerson.controls.alcohol.setValue(null);
    this.alcoholSelector2IsVisible.set(false)
    this.notWillBe2.set(true)
  }
}
