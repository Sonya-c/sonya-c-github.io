import './Card.scss';

const Card = ({ children, shadow = "right", className }) => {
    return <div className={'card shadow-' + shadow + ' ' + className}>
        <div className='card-shadow' />
        <div className='card-content'>
            {children && <div className='card-body'>{children}</div>}
        </div>
    </div>
}

export default Card;
