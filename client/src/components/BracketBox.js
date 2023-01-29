function BracketBox(props) {
  const {name, number, score} = props

  return (
    <div className='bracket-box'>
      <div className='name'>{name}</div>
    </div>
  );
}

export default BracketBox;