import React from "react";
import FetchPHP from "./FethPHP";

const Post = () => {
  const handlePostClick = async () => {
	try {
  	await FetchPHP(); // Espera a que se complete la solicitud POST
	} catch (error) {
  	console.error('Error:', error);
  	// Manejar errores si la solicitud falla
	}
  };

  return (
	<>
  	<button onClick={handlePostClick}>
    	Test Button
  	</button>
	</>
  );
};

export default Post;
