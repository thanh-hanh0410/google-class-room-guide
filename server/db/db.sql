-- USERS
CREATE TABLE users
(
    id INT
    AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR
    (100) NOT NULL,
  email VARCHAR
    (100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role ENUM
    ('teacher', 'admin') DEFAULT 'teacher',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

    -- LESSONS
    CREATE TABLE lessons
    (
        id INT
        AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR
        (255) NOT NULL,
  content TEXT NOT NULL,
  thumbnail_url TEXT,
  created_by INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY
        (created_by) REFERENCES users
        (id)
);

        -- VIDEOS
        CREATE TABLE videos
        (
            id INT
            AUTO_INCREMENT PRIMARY KEY,
  lesson_id INT,
  title VARCHAR
            (255),
  youtube_url TEXT,
  FOREIGN KEY
            (lesson_id) REFERENCES lessons
            (id)
);

            -- DOCUMENTS
            CREATE TABLE documents
            (
                id INT
                AUTO_INCREMENT PRIMARY KEY,
  lesson_id INT,
  file_name VARCHAR
                (255),
  file_url TEXT,
  uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY
                (lesson_id) REFERENCES lessons
                (id)
);

                -- COMMENTS
                CREATE TABLE comments
                (
                    id INT
                    AUTO_INCREMENT PRIMARY KEY,
  lesson_id INT,
  user_id INT,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY
                    (lesson_id) REFERENCES lessons
                    (id),
  FOREIGN KEY
                    (user_id) REFERENCES users
                    (id)
);

                    -- TAGS
                    CREATE TABLE tags
                    (
                        id INT
                        AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR
                        (50) UNIQUE NOT NULL
);

                        -- LESSON_TAGS (many-to-many)
                        CREATE TABLE lesson_tags
                        (
                            lesson_id INT,
                            tag_id INT,
                            PRIMARY KEY (lesson_id, tag_id),
                            FOREIGN KEY (lesson_id) REFERENCES lessons(id),
                            FOREIGN KEY (tag_id) REFERENCES tags(id)
                        );

                        -- QUESTIONS (Forum)
                        CREATE TABLE questions
                        (
                            id INT
                            AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR
                            (255),
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  views INT DEFAULT 0,
  FOREIGN KEY
                            (user_id) REFERENCES users
                            (id)
);

                            -- ANSWERS (Forum)
                            CREATE TABLE answers
                            (
                                id INT
                                AUTO_INCREMENT PRIMARY KEY,
  question_id INT,
  user_id INT,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  is_best BOOLEAN DEFAULT FALSE,
  FOREIGN KEY
                                (question_id) REFERENCES questions
                                (id),
  FOREIGN KEY
                                (user_id) REFERENCES users
                                (id)
);

                                -- QUIZZES
                                CREATE TABLE quizzes
                                (
                                    id INT
                                    AUTO_INCREMENT PRIMARY KEY,
  lesson_id INT,
  title VARCHAR
                                    (255),
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY
                                    (lesson_id) REFERENCES lessons
                                    (id)
);

                                    -- QUIZ QUESTIONS
                                    CREATE TABLE questions_quiz
                                    (
                                        id INT
                                        AUTO_INCREMENT PRIMARY KEY,
  quiz_id INT,
  question TEXT,
  type ENUM
                                        ('single_choice', 'multiple_choice') DEFAULT 'single_choice',
  FOREIGN KEY
                                        (quiz_id) REFERENCES quizzes
                                        (id)
);

                                        -- CHOICES
                                        CREATE TABLE choices
                                        (
                                            id INT
                                            AUTO_INCREMENT PRIMARY KEY,
  question_id INT,
  choice_text TEXT,
  is_correct BOOLEAN DEFAULT FALSE,
  FOREIGN KEY
                                            (question_id) REFERENCES questions_quiz
                                            (id)
);

                                            -- QUIZ ATTEMPTS
                                            CREATE TABLE quiz_attempts
                                            (
                                                id INT
                                                AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  quiz_id INT,
  started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  submitted_at DATETIME,
  score INT DEFAULT 0,
  FOREIGN KEY
                                                (user_id) REFERENCES users
                                                (id),
  FOREIGN KEY
                                                (quiz_id) REFERENCES quizzes
                                                (id)
);

                                                -- QUIZ ANSWERS
                                                CREATE TABLE quiz_answers
                                                (
                                                    id INT
                                                    AUTO_INCREMENT PRIMARY KEY,
  attempt_id INT,
  question_id INT,
  choice_id INT,
  FOREIGN KEY
                                                    (attempt_id) REFERENCES quiz_attempts
                                                    (id),
  FOREIGN KEY
                                                    (question_id) REFERENCES questions_quiz
                                                    (id),
  FOREIGN KEY
                                                    (choice_id) REFERENCES choices
                                                    (id)
);
