import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  readonly navHome: Locator;
  readonly navCareer: Locator;
  readonly navTeam: Locator;
  readonly navCaseStudies: Locator;
  readonly navAbout: Locator;
  readonly navContact: Locator;
  readonly langCZ: Locator;
  readonly langEN: Locator;
  readonly navCareerEN: Locator;
  readonly navTeamEN: Locator;
  readonly navCaseStudiesEN: Locator;
  readonly navAboutEN: Locator;
  readonly navContactEN: Locator;

  constructor(page: Page) {
    this.page = page;

    // Scope na <nav> – vyhnu se duplicitám z mobilního menu
    const nav = page.getByRole('navigation');

    this.navHome        = nav.getByRole('link', { name: 'Domů' }).first();
    this.navCareer      = nav.getByRole('link', { name: 'Kariéra' }).first();
    this.navTeam        = nav.getByRole('link', { name: 'Tým' }).first();
    this.navCaseStudies = nav.getByRole('link', { name: 'Case studies' }).first();
    this.navAbout       = nav.getByRole('link', { name: 'O nás' }).first();
    this.navContact     = nav.getByRole('button', { name: 'Kontaktujte nás!' }).first();
    this.navCareerEN      = nav.getByRole('link', { name: 'Career' }).first();
    this.navTeamEN        = nav.getByRole('link', { name: 'Team' }).first();
    this.navCaseStudiesEN = nav.getByRole('link', { name: 'Case studies' }).first();
    this.navAboutEN       = nav.getByRole('link', { name: 'About us' }).first();
    this.navContactEN     = nav.getByRole('button', { name: 'Contact us!' }).first();

    this.langCZ         = page.getByRole('button', { name: 'CZ' });
    this.langEN         = page.getByRole('button', { name: 'EN' });
  }

  async navigate(path: string = '/') {
    await this.page.goto(path);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async getConsoleErrors(): Promise<string[]> {
    const errors: string[] = [];
    this.page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    return errors;
  }
}