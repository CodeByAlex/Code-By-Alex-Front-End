import {ElementRef, Injectable} from '@angular/core';

@Injectable()
export class ElementFinderService {
  constructor() {}

  findSectioninView(sections: Element[]) {
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

  findlargestElementinView(elements: Element[]) {
    let chosenElement = '';
    let elementHeightInView = 0;
    for (const element of elements) {
      const topWindowPos = window.screenY;
      const windowBottomPos = topWindowPos + window.screen.height;

      if (element.getBoundingClientRect().top > topWindowPos
        && element.getBoundingClientRect().bottom < windowBottomPos) { // In full view
        if (chosenElement == '' || element.getBoundingClientRect().bottom - element.getBoundingClientRect().top > elementHeightInView) {
          chosenElement = element.id;
          elementHeightInView = element.getBoundingClientRect().bottom - element.getBoundingClientRect().top;
        }
      } else if (element.getBoundingClientRect().top < topWindowPos
        && element.getBoundingClientRect().bottom < windowBottomPos) { // Partially out of view from top
        if (chosenElement == '' || element.getBoundingClientRect().bottom - topWindowPos > elementHeightInView) {
          chosenElement = element.id;
          elementHeightInView = element.getBoundingClientRect().bottom - topWindowPos;
        }
      } else if (element.getBoundingClientRect().top > topWindowPos
        && element.getBoundingClientRect().bottom > windowBottomPos) { // Partially out of view from bottom
        if (chosenElement == '' || windowBottomPos - element.getBoundingClientRect().top > elementHeightInView) {
          chosenElement = element.id;
          elementHeightInView = windowBottomPos - element.getBoundingClientRect().top;
        }
      }
    }
    return chosenElement;
  }
}
