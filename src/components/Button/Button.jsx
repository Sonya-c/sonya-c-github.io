import './Button.scss';

const Button = ({ content, onClick }) => (

    <div className='button'>
        <div className="rectangle">{content}</div>
        <button onClick={onClick}>{content}</button>
    </div>);

export default Button;
