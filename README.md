# react-training-task

Постановка задачи
1.	Дана некая коллекция из случайных чисел (скажем от 1 до 100). Количество чисел таково, что из него извлекается целый квадратный корень (size). Т.е. другими словами можно образовать матрицу с размером стороны size. Ограничим максимальное количество элементов на 400-ах, а size соответственно на 20. Также дан некий лимит (limit). Пускай он будет равен 4.
2.	Необходимо, отобразив на экране коллекцию из чисел в виде квадратной матрицы размером size x size, найти последовательность рядомстоящих чисел длиной limit, произведение которых будет максимальным, и подсветить эти элементы. При этом элементы этой последовательности могут идти как по диагонали так и по вертикали. (смотри пример в приложенных изображениях).

Следующий этап
1.	Следующим этапом необходимо добавить несколько элементов управления, а именно: поле для ввода нового size, поле для ввода нового limit. Кнопку для регенерации, а также поле для вывода собственно произведения элементов найденой последовательности.
2.	Каждый раз, когда пользователь меняет значение в поле size, - коллекция всех чисел регенерируется заново, при этом подсвечивается актуальная искомая последовательность.
3.	Каждый раз, когда пользователь менят значение в поле limit, - происходит поиск новой последовательности, у которoй на этот раз длина равна новому значению limit.
4.	Каждый раз, когда пользователь нажимает на кнопку регенерации, - происходит пересоздание всей коллекции чисел при текущих значениях size и limit. Новая последовательность находится и подсвечивается.

Условия
1.	Необходимо добавить валидацию наших полей. Поле подсвечивается красным и под ним выводится соотсетствующий текст ошибки, если:    
1.	Если пользователь ввел недопустимое значение по сути          
2.	Если юзер вводит значение длины последовательности болшее, чем размер матрицы
3.	Если юзер менят значение размера матрицы на большее, чем допустимое значение (скажем 20) или меньшее чем значение длины последовательности
2.	Если введенные в поля данные не валидны - любые калькуляции предотвращаются.
3.	Никаких кнопок подтверждения ввода быть не должно. Все должно происходить “на лету”.
4.	При любых манипуляциях, ведущих к изменению лимита, рамера матрицы либо значений матрицы - произведение элементов искомой последовательности тоже должно быть пересчитано.

Дополнительно
1.	Все должно быть стилизовано в примерном соответствии с тем, как на приложеных изображениях (стилистический креатив только приветствуется :))
2.	Все готовое мини-приложение нужно опубликовать в своем созданном репозитории и выслать мне ссылку :)

Приложения
1.	В созданном мной репозитории () зерно реактовского проекта. Сделайте форк от моего репозитория и далее склонировав себе его запускайте код. Чтобы запустить его, нужно сперва в консоли из папки проекта набрать npm install (это установит все зависимости необходимые для проекта, в том числе и сам реакт). Когда все будет установлено набери npm start - через некоторое время все заедется. Необходимо чтобы был установлен nodejs и npm.
2.	Картинки помогут лучше понять суть того, что нужно сделать :)
3.	В конечном счете вы должны создать Pull Request каждый в созданную для вас ветку sasha и katya соответственно. 