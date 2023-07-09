import Heading1 from "../heading1/heading1";
import style from "./Main.module.css";
import myImage from "../../images/first_image.png";
function Main() {
    return (
        <main>
            <Heading1 />
            <img src={myImage} alt="my image" className={style.image}></img>
        </main>
    );
}
export default Main;