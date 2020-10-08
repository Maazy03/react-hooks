import {useEffect} from 'react';

function UseDocumentTilte(count) {
    useEffect(()=>{
      document.title=`count ${count}`
    },[count])
   
}

export default UseDocumentTilte
