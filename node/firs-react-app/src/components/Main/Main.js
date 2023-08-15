import Heading1 from "../heading1/heading1";
import style from "./Main.module.css";
import myImage from "../../images/first_image.png";
function Main() {
    return (
        <main>
            <Heading1 />

            {/* <img src={myImage} alt="my image" className={style.image}></img> */}
            <blockquote class="text-2xl m-10 font-semibold italic text-center text-slate-900">
                Когда вы все время выглядите &nbsp;
                <span class="before:block before:mt-1 before:-mb-1 before:-ml-2 before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span class="relative text-white">раздраженным,</span>,
                </span>
                &nbsp;люди думают, что вы заняты.
            </blockquote>
        </main>
    );
}
export default Main;