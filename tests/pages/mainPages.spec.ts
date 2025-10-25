import { test, expect, Page, Locator } from '@playwright/test';
import { MainPage } from '../models/MainPages';

let mainPage: MainPage;

test.describe('Тесты главной страницы', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });

  test('Проверка элементов навигации хедер', async () => {
    await mainPage.checkElementsVisability();
  });

  test('Проверка названий элементов навигации хедер', async () => {
    await mainPage.checkElementsText();
  });

  test('Проверка атрибута href элементов навигации хедер', async () => {
    await mainPage.checkElementsHredAttribute();
  });
});
