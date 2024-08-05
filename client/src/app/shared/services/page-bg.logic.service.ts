import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageBgLogicService {
  private bgStr$ = new BehaviorSubject<string>('');

  public setBg(bg: string) {
    this.bgStr$.next(bg);
  }

  public getBg() {
    return this.bgStr$;
  }
}
