import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShopbridgeService } from 'src/app/services/shopbridge.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public error: boolean = false;
  public authenticating: boolean = false;
  public loginForm: FormGroup;
  loggedIn: boolean;
  constructor(
    public sbService: ShopbridgeService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loggedIn = false;
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authenticating = true;
      this.sbService
        .isAuthenticatedUser(
          this.loginForm.controls.username.value,
          this.loginForm.controls.password.value
        )
        .subscribe(
          (data) => {
            if (data) {
              this.loggedIn = true;
              this.sbService.setAuthState(true);
              this._router.navigate(['/dashboard']);
            }
            this.authenticating = false;
          },
          (errRes: HttpErrorResponse) => {
            this.authenticating = false;
            this.openSnackBar();
            throw errRes;
          }
        );
    }
  }
  openSnackBar() {
    this._snackBar.open('Invalid user', 'close', {
      duration: 3000,
    });
  }

  ngOnDestroy() {
    this.loggedIn = false;
  }
}
