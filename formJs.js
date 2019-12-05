document.addEventListener('click', function(event) {
    let el=event.target;
    let elem=document.getElementById("modal");
    let coverDiv = document.getElementById('ffff');
    if(el.classList.contains('show') == true){
 // Показать полупрозрачный DIV, чтобы затенить страницу
    // (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)
  	history.pushState(null, null, 'https://mercyu.github.io/web8');
      
      // убираем возможность прокрутки страницы во время показа модального окна с формой
      document.body.style.overflowY = 'hidden';
      coverDiv.style.display="block";
      elem.style.display="block";
    }
    if(el.classList.contains('close') == true){
      elem.style.display="none";
      coverDiv.style.display="none";
      document.body.style.overflowY = '';
    }
    addEventListener("popstate",function(e){
      elem.style.display="none";
      coverDiv.style.display="none";
      },false); 
})
 
$('document').ready(function() { // после загрузки страницы
  $("#form").submit(function(e){ // перехватываем все при событии отправки
    e.preventDefault();
		let form = $(this); // запишем форму, чтобы потом не было проблем с this
		let error = false; // предварительно ошибок нет
		form.find('input, textarea').each( function(){ // пробежим по каждому полю в форме
			if ($(this).val() == '') { // если находим пустое
				alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // 
				error = true; // ошибка
			}
		});
		if (!error) { // если ошибки нет
			$.ajax({ // инициализируем ajax запрос
			   type: 'POST', // отправляем в POST формате
			   url: 'https://formcarry.com/s/QST5kGOlwRj', // используем готовый бэкенд для сохранения формы
			   data: $(this).serialize(), // данные для отправки
           success: function(data){ // событие после удачного обращения к серверу
                 alert('Вы успешно заказали звонок! Ожидайте обратной связи.');
                  $("#fio").val("");
                  $("#tel").val("");
                  $("#mes").val("");
		         },
		       error: function () { // в случае неудачного завершения запроса к серверу
                alert("Произошла ошибка. Попробуйте снова."); 
                 $("#fio").val("");
                 $("#tel").val("");
                 $("#mes").val("");
		         },
			     });
		}
		return false; // отключаем стандартную отправку формы
	});
});
document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы
	history.pushState(null, null, 'https://mercyu.github.io/web8');
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