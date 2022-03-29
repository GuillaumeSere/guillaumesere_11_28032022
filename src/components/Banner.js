function Banner({ urlImg, texte }) {
    
    return (
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
      </div>
    );
  }
  
  export default Banner;