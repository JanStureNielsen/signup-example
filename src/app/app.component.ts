import { Component } from '@angular/core';
import { FormBuilder
  , FormGroup
  , Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "signup-example";
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.form = this.fb.group({
          firstName: ['', []],
          lastName: ['', []],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          passwordConfirm: ['', Validators.required],
      }, {
          //validator: MustMatch('password', 'passwordConfirm')
      });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  onSubmit() {
    console.log('jsn: on-submit', this.form);
    if (!this.form.invalid) {
      console.log("SUBMIT: ", this.form);
    }
  }

}
