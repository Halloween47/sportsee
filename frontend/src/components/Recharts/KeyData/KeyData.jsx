function KeyData(props) {
    return (
      <>
        <img src={props.srcImg} alt="calories" />
        <div className="calories-infos">
          <p>{props.calories}kCal</p>
          <p>Calories</p>
        </div>
      </>
    );
  }
  
  export default KeyData;
  