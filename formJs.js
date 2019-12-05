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