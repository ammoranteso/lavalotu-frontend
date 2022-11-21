import { TestBed, getTestBed } from '@angular/core/testing';
import { AuthFacade } from './auth.facade';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AuthFacade', () => {
  let httpMock: HttpTestingController;
  let facade: AuthFacade;
  let injector: TestBed;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthFacade],
    });
    injector = getTestBed();
    facade = injector.inject(AuthFacade);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    const service: AuthFacade = TestBed.inject(AuthFacade);
    expect(service).toBeTruthy();
  });

  it('should be called with the dummy', () => {
    spyOn(facade, 'login');
    const dummyNice = { email: 'xd', password: 'xd' };
    facade.login(dummyNice);
    expect(facade.login).toHaveBeenCalledWith(dummyNice);
  });
});
