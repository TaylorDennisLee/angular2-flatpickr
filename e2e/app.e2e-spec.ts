import { CcoFlatpickrPage } from './app.po';

describe('cco-flatpickr App', function() {
  let page: CcoFlatpickrPage;

  beforeEach(() => {
    page = new CcoFlatpickrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
