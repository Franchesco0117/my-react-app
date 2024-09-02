import './GenericCard.css';
import PropTypes from 'prop-types';

const GenericCard = ({ title, bodyText, imageUrl, buttonText }) => {
  return (
    <div className="generic-card">
      <img src={imageUrl} alt={title} className="generic-card-image" />
      <div className="generic-card-content">
        <h3>{title}</h3>
        <p>{bodyText}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};



GenericCard.propTypes = {
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default GenericCard;
