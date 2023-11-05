import styled from 'styled-components'
import CsvReader from "./CsvReader.jsx";
import {useEffect, useState} from "react";
import AnalyseComponent from "./AnalyseComponent.jsx";

const MainContainer = () => {
  const [isFacture, setIsFacture] = useState(false)
  const [facture, setFacture] = useState([])
  const [factureCheck, setFactureCheck] = useState([])
  const [errorMessage, setErrorMessage] = useState('')



  useEffect(() => {
    if(facture.length > 0 && factureCheck.length > 0) {
      setIsFacture(true)
    }
  }, [facture, factureCheck]);



  return (
      <Container  >
        {
          errorMessage ?
              <ErrorMessage className='text-xl text-red-300' >{errorMessage}</ErrorMessage> :
              null
        }
        <InputsContainer className='flex justify-around items-center py-4'>
          <div >
           <CsvReader
               setFacture={setFacture}
               setErrorMessage={setErrorMessage}
               title='Facture Négocié'
           />
          </div>
          <div >
            <CsvReader
                setFacture={setFactureCheck}
                setErrorMessage={setErrorMessage}
                title='Facture à Vérifier'
            />
          </div>
        </InputsContainer>
        <ResultsContainer className=' m-4 p-4 border rounded'>
          {
            isFacture ?
                <>
                  <div className='flex flex-col items-center ' >
                    <AnalyseComponent facture={facture} factureCheck={factureCheck} />
                  </div>
                </>:
                <>
                  <div className='flex flex-col items-center bg-red-300/50 rounded p-2' >
                    <p className='text-red-600' >renseigner les deux factures à analyser</p>
                  </div>
                </>
          }
        </ResultsContainer>
      </Container >
  );
};

export default MainContainer;

const Container = styled.div` 
  padding-top: 16px;
  width: 100vw;
  height: 100vh;
`

const ErrorMessage = styled.p`
  color: #fca5a5;
  font-size: 1.25rem;
  line-height: 1.75rem;
`

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items:center;
  padding: 0 4px;
`

const ResultsContainer = styled.div`
  margin: 32px auto;
  padding: 16px;
  border: 1px Solid #555;
  width: 80%;
  border-radius: 10px;
`