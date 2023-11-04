import {useEffect, useState} from "react";
import ResultCard from "./ResultCard.jsx";

const AnalyseComponent = ({facture, factureCheck}) => {
  const [results, setResults] = useState([])


  const checkFactures = (factOrigin, factCheck) => {
    const originArray = factOrigin.slice(1,-1)
    const checkArray = factCheck.slice(1,-1)
    let resultArray = []


    checkArray.forEach((item) => {
      let check = originArray.filter(test => test[0] === item[0])


      if(parseInt(check[0][2]) !== parseInt(item[2])){
        resultArray.push(item)
      }
    })

    setResults(resultArray)
  }

  useEffect(() => {
    checkFactures(facture, factureCheck)
  }, [facture, factureCheck]);


  return (
      <div className='flex w-full justify-around' >
        <ul className='w-full'>
          {
            results.length > 0 ?
            results.map((item, index) => (
                <ResultCard key={index} result={item} />
            )) :
            <li className='bg-green-200 p-2 flex border rounded items-center justify-center'>
              <p>Aucune erreur détectée</p>
            </li>
          }
        </ul>
      </div >
  );
};

export default AnalyseComponent;