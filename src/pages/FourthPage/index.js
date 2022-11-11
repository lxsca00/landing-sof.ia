import { PageName } from "../../components/PageName";
import doll from "../../assets/Muñequito.png";
import gif from "../../assets/giphy.gif";
import video from "../../assets/video.mp4"
import style from "./FourthPage.module.css"

const FourthPage = () => {
  return (
    <section>
      <PageName text={"D"}></PageName>
      <div className={style.containerImg}>
        <img src={doll} alt="doll"></img>
        <img src={gif} alt="gif"></img>
      </div>
      <video src={video}></video>
    </section>
  );
};

export { FourthPage };
