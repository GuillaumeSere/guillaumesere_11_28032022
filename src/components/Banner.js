function Banner({ urlImg, texte }) {
    
    return texte ? (
      <div
        className="banner"
        style={{
          backgroundImage: `url(${urlImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "40%",
        }}
      >
        <div className="banner_text_bg"></div>
        <p className="banner_text">
          <span>{texte}</span>
        </p>
      </div> ) : (
            <div
            className="ban"
            style={{
              backgroundImage: `url(${urlImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionY: "40%",
            }}
          >
          </div> 
    );
  }
  
  export default Banner;