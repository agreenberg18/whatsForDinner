import { RandRestPage } from './app.po';

describe('rand-rest App', function() {
  let page: RandRestPage;

  beforeEach(() => {
    page = new RandRestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
