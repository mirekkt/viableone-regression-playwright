import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CareerPage extends BasePage {
  readonly heading: Locator;
  readonly positionItems: Locator;
  readonly positionTitles: Locator;

  constructor(page: Page) {
    super(page);

    this.heading        = page.getByRole('heading', { name: 'Hledáme' });
    this.positionItems  = page.locator('.WantedItem_wanted-item__agTaY');
    this.positionTitles = page.locator('.WantedItem_wanted-item__position__5Mcte');
  }

  async goto() {
    await this.navigate('/kariera');
  }

  async getPositionCount(): Promise<number> {
    return this.positionItems.count();
  }

  async getPositionNames(): Promise<string[]> {
    return this.positionTitles.allTextContents();
  }
}