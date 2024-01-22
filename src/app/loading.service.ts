import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading = new BehaviorSubject<boolean>(false);

  show() {
    this.isLoading.next(true);
  }

  hide() {
    // Introduce a delay before hiding the loader
    this.isLoading.pipe(delay(5000)).subscribe(() => {
      this.isLoading.next(false);
    });
  }

  isLoading$ = this.isLoading.asObservable();
}
