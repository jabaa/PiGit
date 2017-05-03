import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MemberService } from '../services/member.service';

@Component({
  moduleId: module.id,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private memberService: MemberService) {
    this.loginFormGroup = this.formBuilder.group({
      name: '',
      password: ''
    });
  }

  public login() {
    this.memberService.login(this.loginFormGroup.controls['name'].value, this.loginFormGroup.controls['password'].value)
      .subscribe((result: boolean) => {

      });
  }
}
