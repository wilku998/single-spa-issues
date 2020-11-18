import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AsyncGuard implements CanActivate {
  canActivate() {
    // console.log('guard called');
    // const fakeRequest = of(true).pipe(delay(250));
    // fakeRequest.subscribe((value) => console.log(`guard returns ${value}`));
    // return fakeRequest;
    return true;
  }
}
