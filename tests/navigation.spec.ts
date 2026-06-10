import { test, expect } from '../fixtures';

test.describe('Navigace', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('logo odkazuje na homepage', async ({ homePage }) => {
    await homePage.navHome.click();
    await expect(homePage.page).toHaveURL('/');
  });

  test('menu → Kariéra', async ({ homePage }) => {
  await homePage.navCareer.click();
  await expect(homePage.page).toHaveURL('/kariera');
  await expect(homePage.page).toHaveTitle(/Kariéra/);
});

test('menu → Tým', async ({ homePage }) => {
  await homePage.navTeam.click();
  await expect(homePage.page).toHaveURL('/tym');
  await expect(homePage.page).toHaveTitle(/team/i);
});

test('menu → Case studies', async ({ homePage }) => {
  await homePage.navCaseStudies.click();
  await expect(homePage.page).toHaveURL('/case-studies');
  await expect(homePage.page).toHaveTitle(/CaseStudies/i);
});

test('menu → O nás', async ({ homePage }) => {
  await homePage.navAbout.click();
  await expect(homePage.page).toHaveURL('/history');
  await expect(homePage.page).toHaveTitle(/O nás/);
});

  test('Kontaktujte nás otevře modal', async ({ contactPage }) => {
    await contactPage.goto();
    await contactPage.openModal();
    await expect(contactPage.modal).toBeVisible();
  });

});