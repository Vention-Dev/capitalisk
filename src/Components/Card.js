import Image from "../assests/media.png";

export const Card = (props) => {
  const title = props.title || "Loading...";
  const description = props.description || "Thank you for your patience,we are getting you the slides right away.";
  const url = props.backgroundImage || Image;

  const backgroundUrl = `url(${url})`;
  const backgroundImageStyle = {
    backgroundImage: backgroundUrl,
  };
  return (
    <div
      style={backgroundImageStyle}
      className={`h-[40%] m-4 rounded-2xl bg-cover bg-center`}
    >
      <div className="h-full w-full p-2 rounded-2xl backdrop-brightness-50 grid grid-rows-2">
        <div className=""></div>
        <div className="h-full m-4 text-white ">
          <h1 className="font-medium text-3xl">{title}</h1>
          <p className="mt-4 mr-32">{description}</p>
        </div>
      </div>
    </div>
  );
};
