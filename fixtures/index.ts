import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { CareerPage } from '../pages/CareerPage';
import { CaseStudiesPage } from '../pages/CaseStudiesPage';

type Pages = {
  homePage: HomePage;
  contactPage: ContactPage;
  careerPage: CareerPage;
  caseStudiesPage: CaseStudiesPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  careerPage: async ({ page }, use) => {
    await use(new CareerPage(page));
  },
  caseStudiesPage: async ({ page }, use) => {
    await use(new CaseStudiesPage(page));
  },
});

export { expect } from '@playwright/test';