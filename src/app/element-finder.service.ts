import {Injectable} from '@angular/core';

@Injectable()
export class ElementFinderService {
  constructor() {}

  findSectionInView(sections: Element[]) {
    for (const section of sections){
      const topWindowPos = window.screenY;
      const windowBottomPos = topWindowPos + window.screen.height;
      const screenMiddle = topWindowPos + ((windowBottomPos - topWindowPos) / 2);

      if (section.getBoundingClientRect().top < screenMiddle
        && section.getBoundingClientRect().bottom > screenMiddle) {
        return section.id;
      }
    }
  }

  findlargestElementInView(elements: Element[]) {
    let chosenElement = null;
    let elementHeightInView = 0;
    for (const element of elements) {
      const topWindowPos = window.screenY;
      const windowBottomPos = topWindowPos + window.screen.height;

      if (this.isElementInFullView(element)) {
        if (!chosenElement || element.getBoundingClientRect().bottom - element.getBoundingClientRect().top > elementHeightInView) {
          chosenElement = element.id;
          elementHeightInView = element.getBoundingClientRect().bottom - element.getBoundingClientRect().top;
        }
      } else if (this.isElementTopOutOfView(element)) {
        if (!chosenElement || element.getBoundingClientRect().bottom - topWindowPos > elementHeightInView) {
          chosenElement = element.id;
          elementHeightInView = element.getBoundingClientRect().bottom - topWindowPos;
        }
      } else if (this.isElementBottomOutOfView(element)) { // Partially out of view from bottom
        if (!chosenElement || windowBottomPos - element.getBoundingClientRect().top > elementHeightInView) {
          chosenElement = element.id;
          elementHeightInView = windowBottomPos - element.getBoundingClientRect().top;
        }
      }
    }
    return chosenElement;
  }

  isElementInFullView(element: Element): boolean {
    if (element.getBoundingClientRect().top > window.screenY
      && element.getBoundingClientRect().bottom < (window.screenY + window.screen.height)) {
        return true;
    }
    return false;
  }

  isElementTopOutOfView(element: Element) {
    if (element.getBoundingClientRect().top < window.screenY
      && element.getBoundingClientRect().bottom < (window.screenY + window.screen.height)) {
        return true;
    }
    return false;
  }

  isElementBottomOutOfView(element: Element) {
    if (element.getBoundingClientRect().top > window.screenY
      && element.getBoundingClientRect().bottom > (window.screenY + window.screen.height)) {
      return true;
    }
    return false;
  }
}
