
const ResultCard = ({result}) => {
  const [code, designation, price] = result
  return (
      <li className='errors' >
        <p>{code}</p>
        <p>{designation}</p>
        <p>{price}€</p>

      </li >
  );
};

export default ResultCard;