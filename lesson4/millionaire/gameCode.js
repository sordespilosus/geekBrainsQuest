var event, ok;
do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else if(event) {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - Выход из игры');
            if (event == -1 || event != 4) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 4: // Второе действие, если во 2 окне ввели 4 то переходим на 3 окно
                do {
                    ok = false;
                    event = +prompt(works.c00 + works.c1 + works.c2 + works.c3 + works.c4 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.c0, event);
                    }
                } while (!ok);
                switch (event) {
                    case 3: // Второе действие, если во 3 окне ввели 4 то переходим на 4 окно
                        do {
                            ok = false;
                            event = +prompt(works.d00 + works.d1 + works.d2 + works.d3 + works.d4 + '-1 - Выход из игры');
                            if (event == -1) {
                                break;
                            }
                            else {
                                ok = isAnswer(works.d0, event);
                            }
                        } while (!ok);
                        switch (event) {
                            case 1: // Второе действие, если в 4 окне ввели 1 то выигрыш
                                alert('Поздравляем, вы победили!');
                        }
                        break;
                    case -1: // Второе действие
                        break;
                    default:
                        alert('Сожалеем, но ответ неверный. Вы проиграли!');
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Сожалеем, но ответ неверный. Вы проиграли!');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Сожалеем, но ответ неверный. Вы проиграли!');
}
alert('Спасибо за игру');


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
	return true;
    
}