import "./Video.css";

function Video({ title, imageURL }) {
  //   const Topic = "React JS Tuto  rial";
  let bg = "dark";
  let imageDimensionStyle = "imageDim";
  return (
    <>
      <img
        src={imageURL}
        alt="Youtube Thumbnail"
        className={imageDimensionStyle}
      />

      <div className={bg}>{[title]}</div>
    </>
  );
}

export default Video;
