function BracketBox(props) {
  const {name, number, score} = props

  return (
    <div className='bracket-box'>
      <div className='score'>{score}</div>
      <div className='name'>{name}</div>
      <div className='number'>{number}</div>
    </div>
  );
}

export default BracketBox;