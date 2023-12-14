import Brand from "../assets/img/brand.gif"

const Gif = () =>{
    return (
        <>
      <img
                className="d-flex"
                alt="Kairos Tower"
                src={Brand}
                style={{
                  height:400,
                  width: 400,
                }}
              />
        </>
    );
}
export default Gif;