
import React, { useEffect, useState } from 'react';

const FetchPHP = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
	// URL de tu archivo PHP
	const url = 'controller/putClientStore.php';

	// Realizar la solicitud fetch
	fetch(url)
  	.then(response => {
    	if (!response.ok) {
      	throw new Error('Error en la solicitud');
    	}
    	return response.json(); // Convertir la respuesta a JSON
  	})
  	.then(data => {
    	// Manejar los datos recibidos
    	setData(data);
  	})
  	.catch(error => {
    	// Manejar errores si la solicitud falla
    	console.error('Error:', error);
  	});
  }, []); // Se ejecuta una sola vez al montar el componente

  return (
	<>
	<h1>test correct</h1>
	{data ? (
    	<pre>{JSON.stringify(data, null, 2)}</pre>
  	) : (
    	<p>Cargando datos...</p>
  	)}
	</>
  );
};

export default FetchPHP;
