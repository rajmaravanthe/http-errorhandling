import { HttpErrorPage } from './app.po';

describe('http-error App', function() {
  let page: HttpErrorPage;

  beforeEach(() => {
    page = new HttpErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
