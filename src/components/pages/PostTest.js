function PostTest () {
    // URL de la API a la que enviarás la solicitud POST
const apiUrl = 'https://dev-kairosGateway.lugma.tech/kairosGateway/apiCore/v1/putExtClient/fL2jz91ptFMA3UwVkBbu/6WclAmsaP9H7SR2WmpDbl1OL9';

// Datos que deseas enviar al servidor en el cuerpo de la solicitud
const data = {
    clientId: '2e44d504',
    filter: "clientName",
    value: 'client',
    param: 'test react-php'
};

// Configurar la solicitud POST
const requestOptions = {
  method: 'POST', // Método de la solicitud
  headers: {
	'Content-Type': 'application/json' // Tipo de contenido del cuerpo (JSON en este caso)
  },
  body: JSON.stringify(data) // Convertir el objeto a una cadena JSON
};

// Enviar la solicitud POST utilizando fetch()
fetch(apiUrl, requestOptions)
  .then(response => {
	if (!response.ok) {
  	throw new Error('Error en la solicitud');
	}
	return response.json(); // Parsear la respuesta a JSON si es aplicable
  })
  .then(data => {
	console.log('Respuesta recibida:', data);
	// Aquí puedes trabajar con la respuesta de la API
  })
  .catch(error => {
	console.error('Error:', error);
	// Manejar errores si la solicitud falla
  });



   }
   export default PostTest;