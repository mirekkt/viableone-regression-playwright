import { test, expect } from '../fixtures';

test.describe('Přepínač jazyka', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('přepnutí do EN změní URL', async ({ homePage }) => {
    await homePage.langEN.click();
    await expect(homePage.page).toHaveURL(/\/en/);
  });

  test('přepnutí zpět do CZ odebere /en z URL', async ({ homePage }) => {
    await homePage.langEN.click();
    await expect(homePage.page).toHaveURL(/\/en/);
    await homePage.langCZ.click();
    await expect(homePage.page).not.toHaveURL(/\/en/);
  });

  test('navigace v EN zachová jazyk', async ({ homePage }) => {
    await homePage.langEN.click();
    await expect(homePage.page).toHaveURL(/\/en/);
    await homePage.navCareerEN.click();
    await expect(homePage.page).toHaveURL(/\/en/);
  });

});