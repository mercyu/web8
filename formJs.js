document.addEventListener('click', function(event) {
    let el=event.target;
    if(el.getElementById("show")){
 // Показать полупрозрачный DIV, чтобы затенить страницу
    // (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)
  function showCover() {
      let coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';
      // убираем возможность прокрутки страницы во время показа модального окна с формой
      document.body.style.overflowY = 'hidden';
      document.body.append(coverDiv);
    }
    let elem=document.getElementById("modal");
    elem.hidden=false;

    }
    function hideCover() {
      document.getElementById('cover-div').remove();
      document.body.style.overflowY = '';
    }

})
	
document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы
	history.pushState(null, null, 'https://sharedmean.github.io/televisions2');
    // выбираем на странице все элементы типа textarea и input
    document.querySelectorAll('textarea, input').forEach(function(e) {
        // если данные значения уже записаны в sessionStorage, то вставляем их в поля формы
        // путём этого мы как раз берём данные из памяти браузера, если страница была случайно перезагружена
        e.value = window.sessionStorage.getItem(e.name, e.value);
        // на событие ввода данных (включая вставку с помощью мыши) вешаем обработчик
        e.addEventListener('input', function() {
            // и записываем в sessionStorage данные, в качестве имени используя атрибут name поля элемента ввода
            window.sessionStorage.setItem(e.name, e.value);
        })
    })
	    }); 