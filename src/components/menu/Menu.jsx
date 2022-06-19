import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#landing">HOME</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">ABOUT</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#run">JOIN US</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#milestones">MILESTONES</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">CONTACT US</a>
                </li>
            </ul>
        </div>
    );
}
