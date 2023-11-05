import {useEffect, useState} from "react";
import ResultCard from "./ResultCard.jsx";
import styled from "styled-components";

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
      <Analyse className='flex w-full justify-around' >
        <ul className='w-full'>
          {
            results.length > 0 ?
            results.map((item, index) => (
                <ResultCard key={index} result={item} />
            )) :
            <li className='success'>
              <p>Aucune erreur détectée</p>
            </li>
          }
        </ul>
      </Analyse >
  );
};

export default AnalyseComponent;

const Analyse = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-around;
  
  ul {
    width: 100%;
    list-style: none;
    
    li {
      margin: .5rem 0;
      padding: 1rem;
      display: flex;
      align-items: center;
      border-radius: 5px;
      
      &.success {
        justify-content: center;
        background: #bbf7d0;
        color: #15803d;
      }
      
      &.errors {
        justify-content: flex-start;
        gap: 4rem;
        background-color: #fecaca;
        color: #991b1b;
      }
    }
  }
`