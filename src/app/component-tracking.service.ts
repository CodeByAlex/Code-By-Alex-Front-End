import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ComponentTrackingService {
  private focusedComponent = new BehaviorSubject<String>('');
  focusedComponentObservable = this.focusedComponent.asObservable();

  constructor() { }


  setNewFocus(focusedVal: String) {
    this.focusedComponent.next(focusedVal);
  }

  getFocusedComponent(): String {
    return this.focusedComponent.getValue();
  }
}
