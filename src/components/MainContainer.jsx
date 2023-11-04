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
      <div className='pt-16 w-full h-screen  '  >
        {
          errorMessage ?
              <p className='text-xl text-red-300' >{errorMessage}</p> :
              null
        }
        <div className='flex justify-around items-center py-4'>
          <div className='flex flex-col' >
           <CsvReader
               setFacture={setFacture}
               setErrorMessage={setErrorMessage}
               title='Facture Négocié'
           />
          </div>
          <div className='flex flex-col'>
            <CsvReader
                setFacture={setFactureCheck}
                setErrorMessage={setErrorMessage}
                title='Facture à Vérifier'
            />
          </div>
        </div>
        <div className=' m-4 p-4 border rounded'>
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
        </div>
      </div >
  );
};

export default MainContainer;