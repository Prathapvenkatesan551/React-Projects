import PropTypes from 'prop-types'; 
export const Header = (props) => {
    let col="error";
    return (
    <div>
        <h1 className="head">This is Header component </h1>
        <p className={col}>it is error</p>
        <p>{props.name}</p>
        </div>);
  };
Header.propTypes={
    name : PropTypes.string
};
Header.defaultProps ={
    name:"No Name"
};