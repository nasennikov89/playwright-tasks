import { test, expect } from '@playwright/test';
import { builtinModules } from 'module';

test.beforeEach(async ({ page }) => {
  await page.goto('https://osstep.github.io/assertion_tohaveattribute');
});

test('1. Проверка атрибутов основной кнопки', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Отправить' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Отправить' })).toHaveAttribute(
    'data-action',
    'submit',
  );
  await expect(page.getByRole('button', { name: 'Отправить' })).toHaveAttribute(
    'title',
    'Основная кнопка',
  );
  await expect(page.getByRole('button', { name: 'Переключить атрибуты' })).toBeVisible();
  await page.getByRole('button', { name: 'Переключить атрибуты' }).click();
  await expect(page.getByRole('button', { name: 'Отправить' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Отправить' })).toHaveAttribute(
    'data-action',
    'cancel',
  );
  await expect(page.getByRole('button', { name: 'Отправить' })).toHaveAttribute(
    'title',
    'Отмена действия',
  );
  // Задание: Проверить атрибуты основной кнопки
  // 1. Найти кнопку "Отправить" по тексту
  // 2. Проверить что она имеет атрибут data-action="submit"
  // 3. Проверить что она имеет атрибут title="Основная кнопка"
  // 4. Нажать кнопку "Переключить атрибуты"
  // 5. Проверить что атрибут data-action изменился на "cancel"
  // 6. Проверить что атрибут title изменился на "Отмена действия"
});

test('2. Проверка отключения кнопки', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Отправить' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Отправить' })).not.toHaveAttribute('disabled', '');
  await expect(page.getByRole('button', { name: 'Отключить кнопку' })).toBeVisible();
  await page.getByRole('button', { name: 'Отключить кнопку' }).click();
  await expect(page.getByRole('button', { name: 'Отправить' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Отправить' })).toHaveAttribute('disabled', '');
  await page.getByRole('button', { name: 'Отключить кнопку' }).click();
  await expect(page.getByRole('button', { name: 'Отправить' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Отправить' })).not.toHaveAttribute('disabled', '');
  // Задание: Проверить изменение состояния кнопки
  // 1. Найти кнопку "Отправить" и проверить что у нее нет атрибута disabled
  // 2. Нажать кнопку "Отключить кнопку"
  // 3. Проверить что кнопка "Отправить" получила атрибут disabled
  // 4. Проверить что значение атрибута disabled равно пустой строке
  // 5. Еще раз нажать "Отключить кнопку"
  // 6. Проверить что атрибут disabled отсутствует
});

test('3. Проверка атрибутов изображения', async ({ page }) => {
  await expect(page.locator('img[alt="Аватар пользователя"]')).toBeVisible();
  await expect(page.locator('img[alt="Аватар пользователя"]')).toHaveAttribute('src', 'user.jpg');
  await expect(page.locator('img[alt="Аватар пользователя"]')).toHaveAttribute(
    'alt',
    'Аватар пользователя',
  );
  await expect(page.locator('img[alt="Аватар пользователя"]')).toHaveAttribute('width', '200');

  // Задание: Проверить атрибуты изображения
  // 1. Найти изображение по атрибуту alt
  // 2. Проверить что оно имеет src="user.jpg"
  // 3. Проверить что оно имеет alt="Аватар пользователя"
  // 4. Проверить что оно имеет width="200"
});

test('4. Проверка атрибутов формы', async ({ page }) => {
  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('#username')).toHaveAttribute('minlength', '3');
  await expect(page.locator('#username')).toHaveAttribute('required', '');
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#email')).toHaveAttribute('disabled', '');
  await expect(page.getByRole('button', { name: 'Активировать email' })).toBeVisible();
  await page.getByRole('button', { name: 'Активировать email' }).click();
  await expect(page.locator('#email')).not.toHaveAttribute('disabled', '');
  await expect(page.locator('#email')).toHaveAttribute('placeholder', 'Введите ваш email');
  // Задание: Проверить атрибуты полей формы
  // 1. Найти поле "Имя пользователя" и проверить:
  //    - имеет атрибут required
  //    - имеет атрибут minlength="3"
  // 2. Найти поле "Email" и проверить что оно имеет атрибут disabled
  // 3. Нажать кнопку "Активировать email"
  // 4. Проверить что поле "Email" больше не имеет атрибута disabled
  // 5. Проверить что placeholder изменился на "Введите ваш email"
});

test('5. Проверка data-атрибутов', async ({ page }) => {
  await expect(page.getByText('Контейнер с data-атрибутами')).toBeVisible();
  await expect(page.getByText('Контейнер с data-атрибутами')).toHaveAttribute(
    'data-role',
    'container',
  );
  await expect(page.getByText('Контейнер с data-атрибутами')).toHaveAttribute(
    'data-visible',
    'true',
  );
  await expect(page.getByText('Контейнер с data-атрибутами')).toHaveAttribute(
    'data-user-id',
    '12345',
  );
  await expect(page.getByRole('button', { name: 'Обновить data-атрибуты' })).toBeVisible();
  await page.getByRole('button', { name: 'Обновить data-атрибуты' }).click();
  await expect(page.getByText('Контейнер с data-атрибутами')).toHaveAttribute(
    'data-visible',
    'false',
  );
  await expect(page.getByText('Контейнер с data-атрибутами')).not.toHaveAttribute(
    'data-user-id',
    '12345',
  );
  await expect(page.getByRole('button', { name: 'Обновить data-атрибуты' })).toBeVisible();
  await page.getByRole('button', { name: 'Обновить data-атрибуты' }).click();
  await expect(page.getByText('Контейнер с data-атрибутами')).toHaveAttribute(
    'data-visible',
    'true',
  );

  // Задание: Проверить data-атрибуты контейнера
  // 1. Найти контейнер по тексту
  // 2. Проверить что он имеет:
  //    - data-role="container"
  //    - data-visible="true"
  //    - data-user-id="12345"
  // 3. Нажать кнопку "Обновить data-атрибуты"
  // 4. Проверить что data-visible изменился на "false"
  // 5. Проверить что data-user-id изменился (не равен "12345")
  // 6. Еще раз нажать кнопку
  // 7. Проверить что data-visible снова "true"
});
