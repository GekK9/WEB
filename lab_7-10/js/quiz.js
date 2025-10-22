document.addEventListener('DOMContentLoaded', function () {
    // Массив с вопросами и ответами
    const quizData = [
        {
            question: "Какой язык программирования используется для создания интерактивности на веб-страницах?",
            answers: ["HTML", "CSS", "JavaScript", "Python"],
            correct: 2
        },
        {
            question: "Что означает аббревиатура HTML?",
            answers: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            correct: 0
        },
        {
            question: "Какой метод используется для добавления элемента в конец массива в JavaScript?",
            answers: ["push()", "pop()", "shift()", "unshift()"],
            correct: 0
        },
        {
            question: "Какое свойство CSS используется для изменения цвета текста?",
            answers: ["text-color", "font-color", "color", "text-style"],
            correct: 2
        },
        {
            question: "Какой оператор используется для строгого сравнения в JavaScript?",
            answers: ["==", "===", "=", "!="],
            correct: 1
        }
    ];

    // Элементы DOM
    const headElement = document.getElementById('head');
    const buttonsElement = document.getElementById('buttons');
    const pagesElement = document.getElementById('pages');

    let currentQuestion = 0;
    let score = 0;

    // Функция для отображения вопроса
    function showQuestion() {
        const question = quizData[currentQuestion];

        // Обновляем текст вопроса
        headElement.textContent = question.question;

        // Очищаем кнопки
        buttonsElement.innerHTML = '';

        // Создаем кнопки для ответов
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = answer;
            button.addEventListener('click', () => checkAnswer(index));
            buttonsElement.appendChild(button);
            buttonsElement.appendChild(document.createElement('br'));
        });

        // Обновляем счетчик вопросов
        pagesElement.textContent = `${currentQuestion + 1} / ${quizData.length}`;
    }

    // Функция для проверки ответа
    function checkAnswer(selectedIndex) {
        const question = quizData[currentQuestion];
        const buttons = document.querySelectorAll('.button');

        // Отключаем все кнопки
        buttons.forEach(button => {
            button.disabled = true;
        });

        // Показываем правильные/неправильные ответы
        buttons.forEach((button, index) => {
            if (index === question.correct) {
                button.className = 'button button_correct';
            } else if (index === selectedIndex && index !== question.correct) {
                button.className = 'button button_wrong';
            } else {
                button.className = 'button button_passive';
            }
        });

        // Проверяем правильность ответа
        if (selectedIndex === question.correct) {
            score++;
        }

        // Переходим к следующему вопросу через 1.5 секунды
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                showQuestion();
            } else {
                showResults();
            }
        }, 1500);
    }

    // Функция для показа результатов
    function showResults() {
        headElement.textContent = `Тест завершен! Ваш результат: ${score} из ${quizData.length}`;
        buttonsElement.innerHTML = '';
        pagesElement.textContent = 'Результат';

        // Создаем кнопку для перезапуска теста
        const restartButton = document.createElement('button');
        restartButton.className = 'button';
        restartButton.textContent = 'Пройти тест еще раз';
        restartButton.addEventListener('click', restartQuiz);
        buttonsElement.appendChild(restartButton);
    }

    // Функция для перезапуска теста
    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
        showQuestion();
    }

    // Начинаем тест
    showQuestion();
});