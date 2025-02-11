// Функция для отображения фотографии и текста "И я", а также для генерации сердечек
function showHearts() {
  console.log("Кнопка 'Да' нажата");

  // Получаем элемент с фотографией
  const photoContainer = document.getElementById("photoContainer");

  // Явно делаем его видимым, изменяя display на block
  photoContainer.style.display = "block";

  console.log(photoContainer); // Проверка, что фото контейнер изменен

  // Генерируем сердечки
  generateHearts();
}

// Функция для генерации случайных сердечек
function generateHearts() {
  const body = document.body;

  // Создаем 50 сердечек, можно изменить количество
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️"; // Сердечко

    // Случайные координаты на экране
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Задаем начальную позицию
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Добавляем сердечко на страницу
    body.appendChild(heart);

    // Удаляем сердечко после анимации (чтобы не перегружать DOM)
    setTimeout(() => {
      heart.remove();
    }, 10500);
  }
}

// Функция для анимации кнопки "Нет" (убегает при наведении)
function moveButton() {
  const noButton = document.getElementById("noButton");

  // Для мобильной версии можно сделать кнопку более динамичной
  if (window.innerWidth <= 768) {
    // Если экран меньше или равен 768px
    // Отскок кнопки
    noButton.style.transition = "transform 0.3s ease-in-out";
    noButton.style.transform = "scale(1.2)"; // Увеличиваем размер

    setTimeout(() => {
      noButton.style.transform = "scale(1)"; // Возвращаем размер кнопки
    }, 200);

    // Вращение кнопки
    noButton.style.transition = "transform 0.5s ease";
    noButton.style.transform = "rotate(360deg)"; // Вращение на 360 градусов

    setTimeout(() => {
      noButton.style.transform = "rotate(0deg)"; // Возвращаем начальное состояние
    }, 500);

    // Появление надписи и смайлика
    showMessage(); // Теперь показываем сообщение при каждом клике
  } else {
    // Для десктопной версии будет стандартная анимация с перемещением
    const randomX = Math.floor(Math.random() * 500) - 300; // случайное движение по оси X
    const randomY = Math.floor(Math.random() * 500) - 300; // случайное движение по оси Y
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
}

// Функция для отображения сообщения "Не зли мене" с смайликом
function showMessage() {
  // Проверяем, нет ли уже элемента на странице, чтобы избежать дублирования
  const existingMessage = document.querySelector(".message");
  if (existingMessage) {
    existingMessage.remove(); // Удаляем старое сообщение, если оно есть
  }

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message");

  // Создаем текст и смайлик
  messageContainer.innerHTML = "Не зли мене 😈";

  // Добавляем на страницу
  document.body.appendChild(messageContainer);

  // Убираем сообщение через 3 секунды
  setTimeout(() => {
    messageContainer.remove();
  }, 3000); // 3000 мс = 3 секунды
}
