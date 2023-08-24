import "./Video.css";

function Video({ title, imageURL, channel = "YouFube", views, time }) {
  //   const Topic = "React JS Tuto  rial";
  //   let bg = "dark";
  return (
    <div className="container">
      <div className="pic">
        <img src={imageURL} alt="Youtube Thumbnail" />
      </div>

      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views
        <span>.</span>
        {time}
      </div>
    </div>
  );
}

export default Video;
