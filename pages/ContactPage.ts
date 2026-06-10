import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
  readonly modal: Locator;
  readonly closeButton: Locator;

  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly firmNameInput: Locator;
  readonly messageTextarea: Locator;
  readonly gdprCheckbox: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.modal       = page.getByRole('dialog');
    this.closeButton = this.modal.getByRole('button', { name: 'Close' });

    this.nameInput      = this.modal.getByPlaceholder('Jméno a Příjmení');
    this.emailInput     = this.modal.getByPlaceholder('E-mail');
    this.phoneInput     = this.modal.getByPlaceholder('Telefon');
    this.firmNameInput  = this.modal.getByPlaceholder('Název firmy');
    this.messageTextarea = this.modal.getByPlaceholder('Vaše zpráva');
    this.gdprCheckbox = this.modal.locator('#gdpr');
    this.submitButton   = this.modal.getByRole('button', { name: 'Odeslat' });
    this.successMessage = this.modal.getByText('Zpráva byla odeslána');
  }

  async goto() {
    await this.navigate('/');
  }

  async openModal() {
    await this.navContact.click();
    await this.modal.waitFor({ state: 'visible' });
  }

  async closeModal() {
    await this.closeButton.click();
    await this.modal.waitFor({ state: 'hidden' });
  }

  async fillForm({
    name,
    email,
    phone = '',
    firmName = '',
    message,
    gdpr = true,
  }: {
    name: string;
    email: string;
    phone?: string;
    firmName?: string;
    message: string;
    gdpr?: boolean;
  }) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    if (phone)    await this.phoneInput.fill(phone);
    if (firmName) await this.firmNameInput.fill(firmName);
    await this.messageTextarea.fill(message);
    if (gdpr) await this.gdprCheckbox.check();
  }

     async submitForm() {
     await this.submitButton.click();
    }

  async submitAndWaitForResponse() {
  await this.page.route('**/api/contact', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true }),
    });
  });
    await this.submitButton.click();
  }
}