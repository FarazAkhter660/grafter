import PropTypes from "prop-types";

const ProductCard = ({ title, image, alt }) => {
  return (
    <article className="product-card">
      <h3>{title}</h3>
      <div className="product-card__image-wrap">
        <img src={image} alt={alt} />
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ProductCard;
