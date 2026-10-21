// Переменная для хранения зарегистрированного пользователя
let user = null;

document.addEventListener("DOMContentLoaded", () => {
    // ===== ФОРМА ПОДПИСКИ =====

    const subscribeForm = document.getElementById("subscribe-form");
    const emailInput = document.getElementById("email");

    subscribeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Проверяем, заполнена ли форма правильно
        if (!subscribeForm.checkValidity()) {
            subscribeForm.reportValidity();
            return;
        }

        // Создаем объект с электронной почтой
        const emailData = {
            email: emailInput.value
        };

        // Выводим объект в консоль
        console.log(emailData);

        alert("Вы успешно подписались!");

        subscribeForm.reset();
    });

    // ===== МОДАЛЬНОЕ ОКНО =====

    const openModalButton = document.getElementById("open-modal");
    const closeModalButton = document.getElementById("close-modal");
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");

    // Открытие модального окна
    function openModal() {
        modal.classList.add("modal-showed");
        overlay.classList.add("modal-showed");
    }

    // Закрытие модального окна
    function closeModal() {
        modal.classList.remove("modal-showed");
        overlay.classList.remove("modal-showed");
    }

    openModalButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    // ===== ФОРМА РЕГИСТРАЦИИ =====

    const registrationForm = document.getElementById("registration-form");

    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const birthDateInput = document.getElementById("birth-date");
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    // Не разрешаем выбирать дату рождения в будущем
    birthDateInput.max = new Date().toISOString().split("T")[0];

    // Проверяем совпадение паролей при вводе
    function checkPasswords() {
        if (
            confirmPasswordInput.value !== "" &&
            passwordInput.value !== confirmPasswordInput.value
        ) {
            confirmPasswordInput.setCustomValidity("Пароли не совпадают");
        } else {
            confirmPasswordInput.setCustomValidity("");
        }
    }

    passwordInput.addEventListener("input", checkPasswords);
    confirmPasswordInput.addEventListener("input", checkPasswords);

    // Обработка отправки формы регистрации
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Проверяем совпадение паролей
        checkPasswords();

        // Проверяем все поля и их валидацию
        if (!registrationForm.checkValidity()) {
            registrationForm.reportValidity();
            return;
        }

        // Создаем объект пользователя
        user = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            birthDate: birthDateInput.value,
            login: loginInput.value.trim(),
            password: passwordInput.value,
            createdOn: new Date()
        };

        // Выводим объект в консоль
        console.log(user);

        alert("Регистрация прошла успешно!");

        // Очищаем форму и закрываем модальное окно
        registrationForm.reset();
        confirmPasswordInput.setCustomValidity("");
        closeModal();
    });
});