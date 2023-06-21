require('dotenv').config(); // Запис змінних з оточення (з файлу .env) у об'єкт process.env

process.env.SECRET_KEY; // === 123456
process.env.NODE_ENV; // === development
