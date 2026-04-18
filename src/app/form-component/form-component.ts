import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { formFeature } from '../form/form.feature';
import { resetForm, updateFormField } from '../form/form.action';

@Component({
  selector: 'app-form-component',
  imports: [CommonModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  // form$: Observable<{ name: string; email: string }>;

  // constructor(private store: Store) {
  //   this.form$ = this.store.select(formFeature.selectFormState);
  // }

  private store = inject(Store);
  form$ = this.store.select(formFeature.selectFormState);

  updateField(field: 'name' | 'email', value: string) {
    // console.log({ [field]: value });
    this.store.dispatch(updateFormField({ field, value }));
  }
  resetForm() {
    // console.log('Form reset');
    this.store.dispatch(resetForm());
  }
}
