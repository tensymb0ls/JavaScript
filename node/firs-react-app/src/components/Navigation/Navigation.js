import style from "./Navigation.module.css";
// const listItems = ['Home', 'Plans', 'FAQ', 'Documentation'];
const listItemsObjects = [
    { text: 'Home', link: 'https://google.com' },
    { text: 'Plans', link: 'https://google.com' },
    { text: 'Faq', link: 'https://google.com' },
    { text: 'Documentation', link: 'https://google.com' }];

function Navigation() {
    return (
        <nav className={style.nav}>
            <ul>
                {listItemsObjects.map((item) => (
                    <li><a href={item.link}>{item.text}</a></li>
                ))}
            </ul>
        </nav>
    );
}
export default Navigation;