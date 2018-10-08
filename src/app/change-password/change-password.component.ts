import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form = new FormGroup({
    oldpassword: new FormControl('', Validators.required, PasswordValidator.isOldPassword),
    newpassword: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required)
  }, {
    validators: PasswordValidator.passwordsShouldMatch
  });

  get oldpassword(){
    return this.form.get('oldpassword');
  }
  get newpassword(){
    return this.form.get('newpassword');
  }
  get confirmpassword(){
    return this.form.get('confirmpassword');
  }
}
