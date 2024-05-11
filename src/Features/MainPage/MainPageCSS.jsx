import backgroundImage from "../../Assets/Images/globe.jpg";
export const styles = {
  mainStyle: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "contain",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
    width: "100vw",
    height: "100vh",
  },
  weatherStyle: {
    backgroundImage:
      "linear-gradient(to right, rgba(4, 3, 3, 0.9), rgba(10, 8, 69, 0.9), rgba(49, 8, 92, 0.9), rgba(61, 3, 126, 0.9))",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
  },
  newsStyle: {
    backgroundImage:
      "linear-gradient(to right, rgba(4, 3, 3, 0.9), rgba(10, 8, 69, 0.9), rgba(49, 8, 92, 0.9), rgba(61, 3, 126, 0.9))",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
  },
};
