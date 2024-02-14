
interface FooterListProps {
    children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({ children }) => {
    return ( 
    <div className="footer__list">
        {children}
    </div> );
}
 
export default FooterList;