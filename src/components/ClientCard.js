

import React, { useState, useEffect } from "react";

function ClientCard() {
  const [data, setData] = useState({ clients: [] });

  useEffect(() => {
	async function fetchData() {
  	try {
    	const response = await fetch(
      	"https://dev-kairosgateway.lugma.tech/kairosGateway/apiCore/v1/getInternalClients/UfbHdZaJ%206WclAmsaP9H7SR2WmpDbl1OL9/unlock"
    	);
    	if (!response.ok) {
      	throw new Error("Network response was not ok");
    	}
    	const jsonData = await response.json();
    	setData(jsonData); // Almacena los datos en el estado
  	} catch (error) {
    	console.error("Error fetching data:", error);
  	}
	}

	fetchData();
  }, []); // El segundo argumento [] indica que useEffect se ejecuta solo una vez al montar el componente

  function editClientStore(button, id, filter, status, param) {
	// Obtener el valor del campo de texto correspondiente al botón
 
 
	var i = document.getElementById(button).value;
 
	var url =
  	"controller/putClientStore.php?" +
  	"clientId=" +
  	encodeURIComponent(id) +
  	"&filter=" +
  	encodeURIComponent(filter) +
  	"&value=" +
  	encodeURIComponent(param) +
  	"&param=" +
  	encodeURIComponent(i);


	fetch(url)
  	.then((response) => {
    console.log(i);
		// Realizar acciones con la respuesta
  	})
  	.catch((error) => {
    	console.log("Error en la petición:", error);
  	});
  }

  let idCounter = "input";
  let counter = 0;
  let counter1 = 0;

  return (
	<>
  	{data.clients.map((client) => (
    	<div className="container m-3 CardClient" key={client.id}>
      	<input id={idCounter + counter++} defaultValue={client.clientName}></input>

      	<button
        	onClick={() =>
          	editClientStore(
				idCounter+counter1++,
            	client.clientId,
            	"clientName",
				"status",
            	"client"
          	)
        	}
        	className="btn btn-primary1 delete-button"
      	>
        	Editar
      	</button>

      	<h2>{client.lastName}</h2>
      	<h2>{client.email}</h2>
      	<h2>{client.key}</h2>
    	</div>
  	))}
	</>
  );
}

export default ClientCard;
