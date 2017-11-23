import { ArtistsListPage } from './app.po';

describe('artists-list App', () => {
  let page: ArtistsListPage;

  beforeEach(() => {
    page = new ArtistsListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
