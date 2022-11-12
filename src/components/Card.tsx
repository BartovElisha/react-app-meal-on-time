interface Props {
    name: string;
    price: number;
    description: string;
    image_url: string;
    category: string;
    link: string;
    rating: number;
}

function Card({
    name, 
    price, 
    description, 
    image_url, 
    category, 
    link,
    rating}: Props) {

    return ( 
        <div className="card mt-4">
            <img src={image_url} className="card-img-top rounded" alt={name} />
            <span className="badge text-center bg-info text-light">{category}</span>
            <div className="card-body">
                <h5 className="card-title text-start">
                    <a href={link}><i className="bi-link"></i>{name}</a>
                </h5>
                <p className="card-text text-start"><strong>{description}</strong></p>
                <p className="card-text text-start">Price: {price}$</p>
                <p className="card-text text-start">Rating: {rating} <i className="bi-star"></i></p>
                <button type="button" className="btn btn-success">Order Now</button>
            </div>
        </div>
     );
}

export default Card;