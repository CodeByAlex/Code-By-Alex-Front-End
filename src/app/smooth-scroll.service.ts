import { Injectable } from '@angular/core';

@Injectable()
export class SmoothScrollService {
  private offSet: number;

  constructor() {}

  scrollTo(yPoint: number, duration: number) {
    setTimeout(() => {
      this.nativeWindow.window.scrollTo(0, yPoint);
    }, duration);
    return;
  }

  smoothScroll(eID) {
    const startY = this.getCurrentYPosition();
    const stopY = getElmYPosition(eID);
    const distance = stopY > startY ? stopY - startY : startY - stopY;
    const step = Math.round(distance / 20);
    let leapY = stopY > startY ? startY + step : startY - step;
    let speed = Math.round(distance / 20);
    let timer = 0;

    if (distance < 100) {
      this.nativeWindow.window.scrollTo(0, stopY); return;
    }

    if (speed >= 20) {
      speed = 20;
    }

    if (stopY > startY) {
      for (let i = startY; i < stopY; i += step) {
        this.scrollTo(leapY, timer * speed);
        leapY += step;
        if (leapY > stopY) {
          leapY = stopY;
        }
        timer++;
      } return;
    }

    for (let i = startY; i > stopY; i -= step) {
      this.scrollTo(leapY, timer * speed);
      leapY -= step;
      if (leapY < stopY) {
        leapY = stopY;
      }
      timer++;
    }
  }

  getCurrentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset){
      return self.pageYOffset;
    }
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    }
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) {
      return document.body.scrollTop;
    }
    return 0;
  }

  get nativeWindow(): any {
    return _window();
  }
}

function getElmYPosition(eID) {
  const elm = document.getElementById(eID);
  let y = elm.offsetTop;
  const node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    this.node = node.offsetParent;
    y += node.offsetTop;
  } return y;
}

function _window(): any {
  // return the global native browser window object
  return window;
}
