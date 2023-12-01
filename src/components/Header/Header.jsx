
import Card from '../Card/Card';
import './Header.scss';

const Header = () => {
    return <header className='section'>
        <img className="profile" src="/assets/images/Profile.svg" alt="profile" />
        <Card className="about" shadow='right'>
            <h1>{"<h1>Hello word</h1>"}</h1>
            <p>I'm Sonya, an enthusiastic student of software development and programming</p>
            <ul>
                <li>🔭 I’m currently studying.</li>
                <li>🌱 I’m currently learning microservices.</li>
                <li>⚡ My favorite food is Mote de queso.</li>
            </ul>
        </Card>
        <div className="figure rectangle" />
        <div className="figure circle" />
        <img id="grid1" className="figure dot-grid" src="/assets/images/dot-grid.svg" alt="" />
        <img id="grid2" className="figure dot-grid" src="/assets/images/dot-grid.svg" alt="" />
    </header>
}

export default Header;