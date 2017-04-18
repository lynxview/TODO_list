import { AngularPrimerProyectoPage } from './app.po';

describe('angular-primer-proyecto App', function() {
  let page: AngularPrimerProyectoPage;

  beforeEach(() => {
    page = new AngularPrimerProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
