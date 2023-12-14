import { GoTerminal } from "react-icons/go";

const Post = () => {
  return (
    <button
      onClick={() => {
        fetch(
          "https://dev-kairosgateway.lugma.tech/kairosGateway/apiCore/v1/getInternalClients/UfbHdZaJ%206WclAmsaP9H7SR2WmpDbl1OL9/unlock"
        )
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch(console.error());
      }}
    >
      <GoTerminal />
      Traer datos
    </button>
  );
};
export default Post;