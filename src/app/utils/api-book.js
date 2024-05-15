const apiUrl = 'http://localhost:3000/api/books';

const create = async (data) => {
    try{
        let response = await fetch(apiUrl,{
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        return await response.json();
    }catch(error){
        console.log(error);
        console.error('Errore durante la creazione:', error);
        return { error: 'Errore durante la creazione' };
    }
}
const getLists = async (signal) => {
    try{
        let response = await fetch(apiUrl,{
            method : 'GET',
            signal : signal
        })
        return await response.json();
    }catch(error){
        console.log(error);
        console.error('Errore durante la richiesta:', error);
        return { error: 'Errore durante la richiesta' };
    }
}

const read = async (params,credentials,signal) => {
    try{
        let response = await fetch(apiUrl + params.userId,{
            method : 'GET',
            signal : signal,
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorizzation' : 'Bearer ' + credentials.t
            }
        })
        return await response.json();
    }catch(error){
        console.log(error);
        console.error('Errore durante recupero dati:', error);
        return { error: 'Errore durante recupero dati' };
    }
}

const update = async (params,credentials,data) => {
    try{
        let response = await fetch(apiUrl + params.userId,{
            method : 'PUT',
            signal : signal,
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorizzation' : 'Bearer ' + credentials.t
            },
            body : JSON.stringify(data)
        })
        return await response.json();
    }catch(error){
        console.log(error);
        console.error('Errore durante aggiornamento dati:', error);
        return { error: 'Errore durante aggiornamento dati' };
    }
}

const remove = async (params,credentials) => {
    try{
        let response = await fetch(apiUrl + params.userId,{
            method : 'DELETE',
            signal : signal,
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorizzation' : 'Bearer ' + credentials.t
            },
        })
        return await response.json();
    }catch(error){
        console.log(error);
        console.error('Errore durante la cancellazione dei dati:', error);
        return { error: 'Errore durante la cancellazione dei dati' };
    }
}
export {create,getLists,read,update,remove}