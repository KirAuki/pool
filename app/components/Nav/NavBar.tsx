import Link from "next/link";
import Container from "../Container";

const NavBar = () => {
    return (
        <nav className="nav-menu">
            <Container>
                <div className="nav-menu__content">
                    <Link className="nav-menu__link" href='/'>
                        Pool-shop    
                    </Link>
                    <Link className="nav-menu__link" href='/'>
                        Search   
                    </Link>
                    <div className="nav-menu__user">
                        <Link className="nav-menu__link" href='/'>
                            Cart   
                        </Link>
                        <Link className="nav-menu__link" href='/'>
                            User    
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
      );
}
 
export default NavBar;