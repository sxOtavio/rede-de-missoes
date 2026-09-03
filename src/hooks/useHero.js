import {useCallback, useState} from 'react';
import { fetchHeroData } from '@/services/HeroServices';


export function useHero(){
 const [heroData, setHeroData] = useState([]);
   

    const loadHeroData =useCallback( async () => {
     console.log("Carregando dados do hero ...");
        try{
        const heroData = await fetchHeroData();
        setHeroData(heroData);
        }
        catch(error){
            console.error("Erro ao carregar dados do hero:", error);
        }
    },[]);


        return{
        // States importados
         heroData,

       

        //Hooks exportados
        loadHeroData
      
    }

};