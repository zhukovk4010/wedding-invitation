import {Component, input, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-section',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent implements OnInit {
  public numberOfPerson = input.required<number>();
  public firstPerson = input.required<string>();
  public secondPerson = input<string>();

  public alcoholSelector1IsVisible = signal(false);
  public alcoholSelector2IsVisible = signal(false);

  public formOnePerson = new FormGroup({
    personName: new FormControl(''),
    willBe: new FormControl<boolean | null>(null),
    alcohol: new FormControl<string | null>(null),
  })

  public formTwoPerson = new FormGroup({
    personName: new FormControl(''),
    willBe: new FormControl<boolean | null>(null),
    alcohol: new FormControl<string | null>(null),
    secondPersonName: new FormControl(''),
    secondWillBe: new FormControl<boolean | null>(null),
    secondAlcohol: new FormControl<string | null>(null),
  })

  ngOnInit(): void {
    if (this.numberOfPerson() === 1) {
      this.formOnePerson.controls.personName.setValue(this.firstPerson());
      return
    }
    if (this.numberOfPerson() === 2) {
      this.formTwoPerson.controls.personName.setValue(this.firstPerson());
      this.formTwoPerson.controls.secondPersonName.setValue(this.firstPerson());
      return
    }
  }

  public onSubmitOnePerson() {
    console.log(this.formOnePerson.value);
  }

  public onSubmitTwoPerson() {
    console.log(this.formTwoPerson.value);
  }

  public onConfirmation1() {
    if (this.numberOfPerson() === 1) {
      this.alcoholSelector1IsVisible.set(true)
      this.formOnePerson.controls.willBe.setValue(true);
      return;
    }

    if (this.numberOfPerson() === 2) {
      this.alcoholSelector1IsVisible.set(true)
      this.formTwoPerson.controls.willBe.setValue(true);
      return;
    }

  }

  public onConfirmation2() {
    this.alcoholSelector2IsVisible.set(true)
    this.formTwoPerson.controls.secondWillBe.setValue(true);
    return;
  }

  public onRefusal1() {
    if (this.numberOfPerson() === 1) {
      this.formOnePerson.controls.willBe.setValue(false);
      return;
    }

    if (this.numberOfPerson() === 2) {
      this.formTwoPerson.controls.willBe.setValue(false);
    }
  }

  public onRefusal2() {
    this.formTwoPerson.controls.secondWillBe.setValue(false);
  }
}
