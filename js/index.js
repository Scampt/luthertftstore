const asks = document.querySelectorAll('.asks .contain-ask');
asks.forEach((ask) => {
	ask.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('actived');

		const answer = ask.querySelector('.answer');
		const alturaRealRespuesta = answer.scrollHeight;
		
		if(!answer.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			answer.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			answer.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		asks.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(ask !== elemento){
				elemento.classList.remove('actived');
				elemento.querySelector('.answer').style.maxHeight = null;
			}
		});
	});
});

const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});
	});
});
