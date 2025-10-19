import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://osstep.github.io/assertion_tohaveurl');
});

test('1. Проверка изменения URL при навигации', async ({ page }) => {
  await page.locator('#about-link').click();
  await expect(page).toHaveURL(/#about/);
  await page.locator('#contacts-link').click();
  await expect(page).toHaveURL(/#contacts/);
  await page.locator('#home-link').click();
  await expect(page).toHaveURL(/#home/);

  // Задание: Проверить изменение URL при клике по ссылкам
  // 1. Нажать на ссылку "О нас"
  // 2. Проверить что URL изменился и содержит "#about"
  // 3. Нажать на ссылку "Контакты"
  // 4. Проверить что URL изменился и содержит "#contacts"
  // 5. Нажать на ссылку "Главная"
  // 6. Проверить что URL снова содержит "#home"
});

test('2. Проверка URL при программной навигации', async ({ page }) => {
  await page.locator('#contacts-link').click();
  await expect(page).toHaveURL(/#contacts/);
  await page.goBack();
  await expect(page).toHaveURL(/#home/);
  // Задание: Проверить URL после программного перехода
  // 1. Нажать кнопку "Перейти в раздел"
  // 2. Проверить что URL изменился на "#contacts"
  // 3. Нажать кнопку "Вернуться назад" (back() в истории)
  // 4. Проверить что URL вернулся к "#home"
});

test('3. Проверка URL после ручного ввода', async ({ page }) => {
  await page.goto('https://osstep.github.io/assertion_tohaveurl#about');
  await expect(page.locator('#about-section')).toBeVisible();
  await expect(page).toHaveURL(/#about/);
  await page.reload();
  await expect(page).toHaveURL(/#about/);
  // Задание: Проверить обработку ручного ввода URL
  // 1. Перейти напрямую по URL с хешем "#about"
  // 2. Проверить что страница отображает раздел "О нас"
  // 3. Проверить что URL содержит "#about"
  // 4. Обновить страницу
  // 5. Проверить что URL сохранился с "#about"
});
