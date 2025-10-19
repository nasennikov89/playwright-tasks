import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://osstep.github.io/assertion_tohaveclass');
});

test('1. Проверка начальных классов элементов', async ({ page }) => {
  await expect(page.locator('#box1')).toBeVisible();
  await expect(page.locator('#box1')).not.toHaveAttribute('class', 'error');
  await expect(page.locator('#box2')).toHaveAttribute('class', 'box error');
  await expect(page.locator('#box3')).toHaveAttribute('class', 'box hidden');

  // Задание: Проверить начальные классы элементов
  // 1. Найти элемент box1 и проверить что он имеет класс "active"
  // 2. Проверить что box1 не имеет класса "error"
  // 3. Найти элемент box2 и проверить что он имеет класс "error"
  // 4. Найти элемент box3 и проверить что он имеет класс "hidden"
});

test('2. Проверка переключения классов box1', async ({ page }) => {
  await expect(page.locator('#box1')).toBeVisible();
  await expect(page.locator('#box1')).toHaveAttribute('class', 'box active');
  await expect(page.locator('#toggle-box1')).toBeVisible();
  await page.locator('#toggle-box1').click();
  await expect(page.locator('#box1')).toHaveAttribute('class', 'box error');
  await expect(page.locator('#box1')).not.toHaveAttribute('class', 'box active');
  await expect(page.locator('#toggle-box1')).toBeVisible();
  await page.locator('#toggle-box1').click();
  await expect(page.locator('#box1')).toBeVisible();
  await expect(page.locator('#box1')).toHaveAttribute('class', 'box active');

  // Задание: Проверить изменение классов при взаимодействии
  // 1. Найти элемент box1 и проверить что он имеет класс "active"
  // 2. Нажать кнопку "Переключить box1"
  // 3. Проверить что box1 теперь имеет класс "error"
  // 4. Проверить что box1 больше не имеет класса "active"
  // 5. Еще раз нажать кнопку
  // 6. Проверить что классы вернулись к исходным
});

test('3. Проверка показа/скрытия элемента', async ({ page }) => {
  await expect(page.locator('#box3')).toHaveCount(1);
  await expect(page.locator('#box3')).toHaveAttribute('class', 'box hidden');
  await page.getByRole('button', { name: 'Показать/скрыть box3' }).click();
  await expect(page.locator('#box3')).not.toHaveAttribute('class', 'box hidden');
  await page.getByRole('button', { name: 'Показать/скрыть box3' }).click();
  await expect(page.locator('#box3')).toHaveAttribute('class', 'box hidden');

  // Задание: Проверить классы при скрытии/показе элемента
  // 1. Найти элемент box3 и проверить что он имеет класс "hidden"
  // 2. Нажать кнопку "Показать/скрыть box3"
  // 3. Проверить что box3 больше не имеет класса "hidden"
  // 4. Еще раз нажать кнопку
  // 5. Проверить что класс "hidden" снова присутствует
});

test('4. Проверка классов карточки пользователя', async ({ page }) => {
  await expect(page.locator('#user-card')).toBeVisible();
  await expect(page.locator('#user-card')).not.toHaveAttribute('class', 'user-card premium');
  await expect(page.getByRole('button', { name: 'Перейти на Премиум' })).toBeVisible();
  await page.getByRole('button', { name: 'Перейти на Премиум' }).click();
  await expect(page.locator('#user-card')).toHaveAttribute('class', 'user-card premium');
  await page.getByRole('button', { name: 'Отметить как просроченный' }).click();
  await expect(page.locator('#user-card')).toHaveAttribute('class', 'user-card premium expired');
  // Задание: Проверить классы карточки пользователя
  // 1. Найти карточку пользователя и проверить что у нее нет класса "premium"
  // 2. Нажать кнопку "Перейти на Премиум"
  // 3. Проверить что карточка получила класс "premium"
  // 4. Нажать кнопку "Отметить как просроченный"
  // 5. Проверить что карточка имеет оба класса: "premium" и "expired"
  // 6. Проверить что классы содержатся в любом порядке
});

test('5. Проверка элемента с несколькими классами', async ({ page }) => {
  await expect(page.locator('#multi-class')).toHaveAttribute('class', 'box warning large rounded');
  await page.getByRole('button', { name: 'Изменить классы' }).click();
  await expect(page.locator('#multi-class')).toHaveAttribute('class', 'box rounded error');
  // Задание: Проверить элемент с множеством классов
  // 1. Найти элемент multi-class и проверить что он имеет все классы:
  //    "box", "warning", "large", "rounded" (в любом порядке)
  // 2. Нажать кнопку "Изменить классы"
  // 3. Проверить что класс "warning" заменен на "error"
  // 4. Проверить что класс "large" удален
  // 5. Проверить что класс "rounded" остался
  // 6. Проверить что элемент имеет класс "box" (основной класс)
});
