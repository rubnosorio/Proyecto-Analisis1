import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  formErrors = {
    username: '',
    password: '',
  };

  validationMessages = {
    username: {
      required: 'Se requiere un nombre de usuario',
      minlength: 'El nombre de usuario debe tener como minimo 2 caracteres',
      maxlength: 'El nombre de usuario no debe tener mas de 25 caracteres',
    },
    password: {
      required: 'Se requiere de un password',
      minlength: 'El password debe tener como minimo 2 caracteres',
      maxlength: 'El password no debe tener mas de 25 caracteres',
    },
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
    });
    this.loginForm.valueChanges.subscribe((data) => {
      this.onValueChanged(data);
    });
    this.onValueChanged();
  }

  onValueChanged(data?) {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
