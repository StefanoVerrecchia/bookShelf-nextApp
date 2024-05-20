import { useState } from "react"

const usePrintName = (props) =>{
    const setthisName = (name) =>{
        const newName = 'Ciao ' + name;
        setName(newName);
    }
    console.log(props);
    const [name,setName] = useState('');
    return {
        name,setthisName
    }
}
export default usePrintName