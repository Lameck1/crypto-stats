import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({
  logo, coinName, coinStat, info, details,
}) => (
  <section className="banner-section">
    <div className={details ? 'banner-logo-div-details' : 'banner-logo-div'}>
      <img className="banner-logo" src={logo} alt={`${coinName}logo`} height="80%" width="80%" />
    </div>
    <div className={details ? 'banner-details-div-details' : 'banner-details-div'}>
      <span className={details ? 'banner-details-details' : 'banner-details'}>
        {coinName}
        <br />
        <small>{`${info}${coinStat.toFixed(2)}`}</small>
      </span>
    </div>
  </section>
);

Banner.propTypes = {
  logo: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
  coinStat: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
  details: PropTypes.bool.isRequired,
};

export default Banner;
