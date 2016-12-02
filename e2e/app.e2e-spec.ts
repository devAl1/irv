import { IrvPage } from './app.po';

describe('irv App', function() {
  let page: IrvPage;

  beforeEach(() => {
    page = new IrvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
