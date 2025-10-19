import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://osstep.github.io/assertion_tocontaintext');
});

test('1. Проверка статического текста', async ({ page }) => {
  await expect(page.locator('#static-text')).toBeVisible();
  await expect(page.locator('#static-text')).toContainText('static text block');
  await expect(page.locator('#static-text')).toContainText('important information');
  await expect(page.locator('#static-text')).not.toContainText('dynamic content');
  // Задание: Проверить, что статический текстовый блок содержит определенные подстроки
  // 1. Найти элемент #static-text
  // 2. Проверить что он содержит текст "static text block"
  // 3. Проверить что он содержит текст "important information"
  // 4. Проверить что он НЕ содержит текст "dynamic content"
});

test('2. Проверка динамически изменяемого текста', async ({ page }) => {
  await expect(page.locator('#dynamic-text')).toBeVisible();
  await expect(page.locator('#dynamic-text')).toContainText('Initial dynamic text');
  await page.locator('#change-text').click();
  await expect(page.locator('#dynamic-text')).toContainText('Text was changed at');
  await expect(page.locator('#add-part')).toBeVisible();
  await page.locator('#add-part').click();
  await expect(page.locator('#dynamic-text')).toContainText('additional part');
  // Задание: Проверить изменение динамического текста
  // 1. Найти элемент #dynamic-text и проверить что он содержит "Initial dynamic text"
  // 2. Нажать кнопку #change-text
  // 3. Проверить что текст теперь содержит "Text was changed at"
  // 4. Нажать кнопку #add-part
  // 5. Проверить что текст теперь содержит "(additional part)"
});

test('3. Проверка списка элементов', async ({ page }) => {
  await expect(page.locator('#item-list')).toBeVisible();
  await expect(page.locator('#item-list')).toContainText('Item 1: Basic');
  await expect(page.locator('#item-list')).toContainText('Intermediate');
  await expect(page.locator('#add-item')).toBeVisible();
  await page.locator('#add-item').click();
  await expect(page.locator('#item-list')).toContainText('New added item');
  // Задание: Проверить содержимое списка
  // 1. Найти элемент #item-list
  // 2. Проверить что он содержит текст "Item 1: Basic"
  // 3. Проверить что он содержит текст "Intermediate"
  // 4. Нажать кнопку #add-item
  // 5. Проверить что список теперь содержит текст "New added item"
});

test('4. Проверка скрытого/отображаемого текста', async ({ page }) => {
  await expect(page.locator('#hidden-content')).not.toBeVisible();
  await expect(page.locator('#toggle-text')).toBeVisible();
  await page.locator('#toggle-text').click();
  await expect(page.locator('#hidden-content')).toContainText('special content');
  await expect(page.locator('#hidden-content')).toContainText('hidden but now is visible');

  // Задание: Проверить отображение скрытого текста
  // 1. Найти элемент #hidden-content и проверить что он не видим
  // 2. Нажать кнопку #toggle-text
  // 3. Проверить что элемент теперь содержит текст "special content"
  // 4. Проверить что элемент содержит текст "hidden but now is visible"
});

test('5. Проверка частичного совпадения в длинном тексте', async ({ page }) => {
  await expect(page.locator('#partial-text')).toBeVisible();
  await expect(page.locator('#partial-text')).toContainText('quick brown fox');
  await expect(page.locator('#partial-text')).toContainText('lazy dog');
  await expect(page.locator('#partial-text')).toContainText('all letters of the English alphabet');
  await expect(page.locator('#partial-text')).not.toContainText(
    'all letters of the Russian alphabet',
  );
  // Задание: Проверить частичные совпадения в длинном тексте
  // 1. Найти элемент #partial-text
  // 2. Проверить что он содержит "quick brown fox"
  // 3. Проверить что он содержит "lazy dog"
  // 4. Проверить что он содержит "all letters of the English alphabet"
  // 5. Проверить что он НЕ содержит "all letters of the Russian alphabet"
});
