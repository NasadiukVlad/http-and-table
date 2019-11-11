import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.buildForm();

    // prevent menu visibility issues
    this.authService.loginAction.next(false);
  }

  public onSignIn() {
    const {username, password} = this.signInForm.value;
    this.authService.login(username, password);
  }

  public onSubmit() {
    console.log(this.signInForm);
  }

  private buildForm() {
    this.signInForm = this.formBuilder.group(
      {
        username: [''],
        password: ['']
      });
  }
}




