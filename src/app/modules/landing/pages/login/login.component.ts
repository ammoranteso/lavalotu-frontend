import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@domain/application/facade';
import { ILoginUser } from '@domain/model/interfaces/login-user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DASHBOARD_BASE } from '@utils/constants/routes.constant';
import { LocalstorageService } from '@services/localstorage/localstorage.service';

/**
 *  Login component
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly authFacade: AuthFacade,
    private readonly router: Router,
    private readonly localStorageService: LocalstorageService
  ) {}

  /**
   * Login form validators
   */
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  /**
   * Basic login function, calls the login function of authFacade
   * @param user => Login user data (email: string, password: string)
   */
  login(user: Partial<ILoginUser>): void {
    this.authFacade.login(user).subscribe((response: boolean) => {
      if (response) {
        this.router.navigateByUrl(`/${DASHBOARD_BASE}`);
      } else {
        // Error al login
      }
    });
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    if (this.localStorageService.token) {
      this.router.navigateByUrl(`/${DASHBOARD_BASE}`);
    }
  }
}
