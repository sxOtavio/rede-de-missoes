import {useCallback, useState} from 'react';
import { fetchNoticiasData } from '@/services/NoticiasServices';


export function useNoticias(){
 const [noticiasData, setNoticiasData] = useState([]);


    const loadNoticiasData =useCallback( async () => {
     console.log("Carregando dados das noticias ...");
        try{
        const noticiasData = await fetchNoticiasData();
        setNoticiasData(noticiasData);
        }
        catch(error){
            console.error("Erro ao carregar dados das noticias:", error);
        }
    },[]);


        return{
        // States importados
         noticiasData,

       

        //Hooks exportados
        loadNoticiasData
      
    }

};