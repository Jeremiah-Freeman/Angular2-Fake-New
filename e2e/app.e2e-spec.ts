import { HackYouPage } from './app.po';

describe('hack-you App', function() {
  let page: HackYouPage;

  beforeEach(() => {
    page = new HackYouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
