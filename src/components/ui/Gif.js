import Brand from "../../assets/img/brand.gif"

const Gif = () =>{
    return (
        <>
      <img
                className="container-fluid"
                alt="Kairos Tower"
                src={Brand}
                style={{
                  height:350,
                  width: 350,
                }}
              />
        </>
    );
}
export default Gif;