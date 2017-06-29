import { AlexanderWilsonSitePage } from './app.po';

describe('alexander-wilson-site App', () => {
  let page: AlexanderWilsonSitePage;

  beforeEach(() => {
    page = new AlexanderWilsonSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
