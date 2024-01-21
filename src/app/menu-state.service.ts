import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  constructor() {}
  isMenuOpen = false;

  toggleMenu(value: boolean) {
    this.isMenuOpen = value;
  }
}
