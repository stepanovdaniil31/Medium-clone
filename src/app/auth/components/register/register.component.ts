import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/types/app-state.interface';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';
import { AuthService } from '../../services/auth.service';
import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { RegisterRequest } from '../../types/register-request.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: RegisterRequest = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({request}));
  }
}
