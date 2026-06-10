import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CaseStudiesPage extends BasePage {
  readonly caseStudyTitles: Locator;
  readonly mobileContainer: Locator;

  constructor(page: Page) {
    super(page);

    // h2 uvnitř karet – stabilnější než Next.js CSS třídy
    this.caseStudyTitles  = page.locator('.CaseStudiesItems_mobile-container__iaowG h2');
    this.mobileContainer  = page.locator('.CaseStudiesItems_mobile-container__iaowG');
  }

  async goto() {
    await this.navigate('/case-studies');
  }

  async getCaseStudyCount(): Promise<number> {
    return this.caseStudyTitles.count();
  }

  async getCaseStudyNames(): Promise<string[]> {
    return this.caseStudyTitles.allTextContents();
  }

  async isCaseStudyVisible(name: string): Promise<boolean> {
    return this.page.getByRole('heading', { name, exact: true }).isVisible();
  }
}