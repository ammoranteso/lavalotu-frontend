import { TestBed, getTestBed } from '@angular/core/testing';
import { AuthApiService } from './auth-api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

fdescribe('AuthApiService', () => {
  let httpMock: HttpTestingController;
  let injector: TestBed;
  let service: AuthApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthApiService],
    });
    injector = getTestBed();
    service = injector.inject(AuthApiService);
    httpMock = injector.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const _service: AuthApiService = TestBed.inject(AuthApiService);
    expect(_service).toBeTruthy();
  });

  it('should return an Observable<void>', () => {
    const dummyUser = { email: 'test@test.com', password: 'Passw0rd' };
    const token = service.login(dummyUser).pipe(
      map((response) => {
        return response.headers.get('x-token');
      })
    );
    token.subscribe((response) => {
      expect(response).not.toBeTruthy();
    });
    const req = httpMock.expectOne(`${environment.apiUrl}/signin`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
  });
});
