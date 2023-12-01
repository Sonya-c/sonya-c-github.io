import './Footer.scss';
import Icon from '../Icon/Icon';

const Footer = () => {
    return <footer id="contact" className='section'>
        <div className="main-content">
            <h2>Contact</h2>
            <div className="grid">
                <a href="https://github.com/sonya-c/" target="_blank" rel="noreferrer">
                    <Icon iconName="github" iconExtension="svg" />
                </a>
                <a href="https://www.linkedin.com/in/sonya-castro/" target="_blank" rel="noreferrer">
                    <Icon iconName="linkedin" iconExtension="svg" />
                </a>
                <a href="mailto:sonya.castro.gomez@gmail.com" target="_blank" rel="noreferrer">
                    <Icon iconName="mail" iconExtension="svg" />
                </a>
            </div>

        </div>
        <p className="copyright">© Developed and designed by Sonya Castro 2023</p>
        <div className="figure triangle" />
        <div className="figure circle" />
    </footer>
}

export default Footer;