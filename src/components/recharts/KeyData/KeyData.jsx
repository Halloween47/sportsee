function KeyData(props) {
    return (
      <>
        <img src={props.srcImg} alt="calories" />
        <div className="calories-infos">
          <p>{props.calories}{props.unit}</p>
          <p>{props.valeur}</p>
        </div>
      </>
    );
  }
  
  export default KeyData;
  