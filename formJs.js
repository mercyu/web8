document.addEventListener('click', function(event) {
 
    let el=event.target;
    let elem=document.getElementById("modal");
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
    showCover();
    elem.hidden=false;

    }
    if(el.getElementById("close")){
      elem.hidden=true;
    function hideCover() {
      document.getElementById('cover-div').remove();
      document.body.style.overflowY = '';
    }
    hideCover();
    }
})
 
$(document).ready(function() { // после загрузки страницы
  $('.show').on('click', function(e){      
    // отменяем стандартное действие при клике
    e.preventDefault();
 //  function Back() {
    $("#modal").show();
  history.pushState(null, null, 'https://mercyu.github.io/web8');
  //});
},false);
window.addEventListener("popstate",function(e){
  $("#modal").hide();

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
		         },
		       error: function () { // в случае неудачного завершения запроса к серверу
		            alert("Произошла ошибка. Попробуйте снова."); 
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