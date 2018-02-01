import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {ElementRef} from "@angular/core";
import {ElementFinderService} from "./element-finder.service";
class MockElementRef implements ElementRef {
  nativeElement = {};
}
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, ElementFinderService],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
