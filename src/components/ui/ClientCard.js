import React, { useState, useEffect } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import '../controller/putClientStore.php';

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

  return (
    <>
      {data.clients.map((client, index) => (
        <div className="container w-100 h-100" key={client.clientId}>
          <div className="row">
            <div className="card col-12 mt-1 p-2 rounded-0 bg-dark bg-opacity-10">
              <div className="container m-3 CardClient">
                <InputGroup>
                  <Input
                    id={`input${index}`}
                    defaultValue={client.clientName}
                  />
                  <Button
                    className="btn btn-dark"
                    onClick={() =>
                      editClientStore(
                        `input${index}`,
                        client.clientId,
                        "clientName",
                        "status",
                        "client"
                      )
                    }
                  >
                    Editar
                  </Button>
                </InputGroup>

                <h2 className="text-dark">{client.lastName}</h2>
                <h2 className="text-dark">{client.email}</h2>
                <p className="text-dark">{client.key}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ClientCard;