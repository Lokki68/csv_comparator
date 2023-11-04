
const ResultCard = ({result}) => {
  const [code, designation, price] = result
  return (
      <li className=' bg-red-200 p-2 flex border rounded items-center justify-start gap-6' >
        <p>{code}</p>
        <p>{designation}</p>
        <p>{price}€</p>

      </li >
  );
};

export default ResultCard;