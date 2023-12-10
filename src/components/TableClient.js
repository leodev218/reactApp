import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

function ClientTable() {
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

  



  return (
    <>
      <div className="container w-100 h-100">
        <div className="row">
          <div className="col-12 mt-1 p-2 rounded-0">
            <Table borderless hover striped>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                </tr>
              </thead>
              {data.clients.map((client) => (
                <tbody>
                  <tr>
                    <th className="text fs-6">{client.id}</th>
                    <th className="text fs-6">{client.clientName}</th>
                    <th className="text fs-6">{client.lastName}</th>
                    <th className="text fs-6">{client.email}</th>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientTable;

