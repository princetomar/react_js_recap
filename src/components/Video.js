import "./Video.css";

function Video({
  title,
  imageURL,
  channel = "YouFube",
  views,
  time,
  isChannelVerified,
}) {
  //   const Topic = "React JS Tuto  rial";
  //   let bg = "dark";

  // let channelJSx;
  // if (isChannelVerified) {
  //   channelJSx = <div className="channel">{channel} ✅ </div>;
  // } else {
  //   <div className="channel">{channel} </div>;
  // }
  return (
    <div className="container">
      <div className="pic">
        <img src={imageURL} alt="Youtube Thumbnail" />
      </div>

      <div className="title">{title}</div>
      {/* {channelJSx} */}
      {isChannelVerified ? (
        <div className="channel">{channel} ✅ </div>
      ) : (
        <div className="channel">{channel}</div>
      )}
      <div className="views">
        {views} views
        <span>.</span>
        {time}
      </div>
    </div>
  );
}

export default Video;
