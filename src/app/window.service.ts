import { Injectable } from '@angular/core';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowService {
  get nativeWindow(): any {
    return _window();
  }

  getCurrentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }
}
