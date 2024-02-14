import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
    return ( 
        <footer className="footer">
            <Container>
                <div className="footer__container">
                    <FooterList>
                        <h3>Категории</h3>
                    </FooterList>
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;