import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";
import Paw from "../../images/icons/Paw";

function Header() {
    console.log(style);
    return (
        <header className={style.header}>
            <div>
                <img src="https://cp.sprinthost.ru/img/logos/login-page/logo--sprinthost.svg" alt="Logo" />
            </div>
            <nav>
                <Navigation />
            </nav>
            <div>
                <Paw />
            </div>
        </header>
    );
}
export default Header;