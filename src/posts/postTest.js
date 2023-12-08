
export const  Posts = () => {
    return (
        <button onClick={()=>{
            fetch('https://dev-kairosgateway.lugma.tech/kairosGateway/apiCore/v1/getInternalClients/UfbHdZaJ%206WclAmsaP9H7SR2WmpDbl1OL9/unlock')
            .then(response => response.json())
            .then(data => console.log(data))
        }}>
            Traer datos
        </button>
    );
}