import { Injectable } from '@angular/core';
import {WindowService} from './window.service';

@Injectable()
export class SmoothScrollService {
  win: Window;
  private offSet: number;

  constructor(
    private _win: WindowService) {
    this.win = _win.nativeWindow;
  }
  scrollTo(yPoint: number, duration: number) {
    setTimeout(() => {
      this.win.window.scrollTo(0, yPoint);
    }, duration);
    return;
  }

  smoothScroll(eID) {
    const startY = this._win.getCurrentYPosition();
    const stopY = elmYPosition(eID);
    const distance = stopY > startY ? stopY - startY : startY - stopY;
    const step = Math.round(distance / 20);
    let leapY = stopY > startY ? startY + step : startY - step;
    let speed = Math.round(distance / 20);
    let timer = 0;

    if (distance < 100) {
      this.win.window.scrollTo(0, stopY); return;
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

  getYPosition(eID) {
    return elmYPosition(eID);
  }
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    this.node = node.offsetParent;
    y += node.offsetTop;
  } return y;
}

