import { ProjectKarmaPage } from './app.po';

describe('project-karma App', () => {
  let page: ProjectKarmaPage;

  beforeEach(() => {
    page = new ProjectKarmaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
