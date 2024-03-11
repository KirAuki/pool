import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { SlSocialVkontakte, SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
    return ( 
        <footer className="footer">
            <Container>
                <div className="footer__container">
                    <FooterList>
                        <h3 className="footer__title">Категории</h3>
                        <Link href={'/'}>Химия</Link>
                        <Link href={'/'}>Химия</Link>
                        <Link href={'/'}>Химия</Link>
                        <Link href={'/'}>Химия</Link>
                        <Link href={'/'}>Химия</Link>
                        <Link href={'/'}>Химия</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="footer__title">Клиентский сервис</h3>
                        <Link href={'/'}>Связаться с нами</Link>
                        <Link href={'/'}>Политика Покупок</Link>
                        <Link href={'/'}>Возврат и замена</Link>
                        <Link href={'/'}>Вопросы и ответы</Link>
                    </FooterList>
                    <div className="footer__about-us">
                        <h3 className="footer__title">О нас</h3>
                        <p>Компания по продаже оборудования для бассейнов</p>
                        <p>&copy; {new Date().getFullYear()} Pool-Shop. Все права защищены </p>
                    </div>
                    <FooterList>
                        <h3 className="footer__title">Подпишись на нас</h3>
                        <div className="footer__follow-us">
                            <Link href={'/'}>
                                <SlSocialVkontakte size={24}/>
                            </Link>
                            <Link href={'/'}>
                                <SlSocialYoutube size={24}/>
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;