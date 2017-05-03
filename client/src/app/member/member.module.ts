import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form.component';
import { MemberService } from './services/member.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginFormComponent
  ],
  providers: [
    MemberService
  ],
  exports: [
    LoginFormComponent
  ]
})
export class MemberModule {}
