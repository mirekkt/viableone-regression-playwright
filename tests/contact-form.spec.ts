import { test, expect } from '../fixtures';

test.describe('Kontaktní formulář', () => {

  test.beforeEach(async ({ contactPage }) => {
    await contactPage.goto();
    await contactPage.openModal();
  });

  test('modal se otevře a zavře', async ({ contactPage }) => {
    await expect(contactPage.modal).toBeVisible();
    await contactPage.closeModal();
    await expect(contactPage.modal).toBeHidden();
  });

  test('odeslání prázdného formuláře – formulář zůstane otevřený', async ({ contactPage }) => {
    await contactPage.submitForm();
    await expect(contactPage.modal).toBeVisible();
  });

  test('nevalidní email – formulář zůstane otevřený', async ({ contactPage }) => {
    await contactPage.fillForm({
      name: 'Mirek Kliment',
      email: 'email',
      phone: '+420 600 000 000',
      message: 'Testovací zpráva',
      gdpr: true,
    });
    await contactPage.submitForm();
    await expect(contactPage.modal).toBeVisible();
  });

  test('email bez domény – formulář zůstane otevřený', async ({ contactPage }) => {
    await contactPage.fillForm({
      name: 'Mirek Kliment',
      email: 'mirekkliment@',
      phone: '+420 600 000 000',
      message: 'Testovací zpráva',
      gdpr: true,
    });
    await contactPage.submitForm();
    await expect(contactPage.modal).toBeVisible();
  });

});