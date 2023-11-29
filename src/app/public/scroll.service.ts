import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScrollService {
  private scrollSubject = new Subject<void>();

  scrollEvent$ = this.scrollSubject.asObservable();

  triggerScrollEvent() {
    this.scrollSubject.next();
  }
}
