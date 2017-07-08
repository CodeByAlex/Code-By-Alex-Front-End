import { Injectable } from '@angular/core';
import {WindowService} from "./window.service";

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
      this.win.window.scrollTo(0, yPoint)
    }, duration);
    return;
  }

  smoothScroll(eID) {
    var startY = this._win.getCurrentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      this.win.window.scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 50);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 50);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        this.scrollTo(leapY, timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY; timer++;
      } return;
    }
    for (var i = startY; i > stopY; i -= step) {
      this.scrollTo(leapY, timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
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

