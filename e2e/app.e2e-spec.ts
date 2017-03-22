import { AngularEMarketPage } from './app.po';

describe('angular-emarket App', () => {
  let page: AngularEMarketPage;

  beforeEach(() => {
    page = new AngularEMarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
