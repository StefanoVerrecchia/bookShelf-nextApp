const apiUrl = 'http://localhost:8000/v1/books/';

const useBooksApi = () => {

    const create = async (data) => {
        console.log('create');
        console.log(data);
        try {
            let response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error);
            console.error('Errore durante la creazione:', error);
            return { error: 'Errore durante la creazione' };
        }
    }
    const getLists = async (signal) => {
        console.log('getLists');
        try {
            let response = await fetch(apiUrl, {
                method: 'GET',
                signal: signal
            })
            return await response.json();
        } catch (error) {
            console.log(error);
            console.error('Errore durante la richiesta:', error);
            return { error: 'Errore durante la richiesta' };
        }
    }

    const read = async (params, credentials, signal) => {
        try {
            let response = await fetch(apiUrl + params.userId, {
                method: 'GET',
                signal: signal,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorizzation': 'Bearer ' + credentials.t
                }
            })
            return await response.json();
        } catch (error) {
            console.log(error);
            console.error('Errore durante recupero dati:', error);
            return { error: 'Errore durante recupero dati' };
        }
    }

    const update = async (data) => {
        console.log('create');
        console.log('data --> ', data);
        console.log('userId --> ', data.id);
        try {
            let response = await fetch(apiUrl + data.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data.body)
            })
            return await response.json();
        } catch (error) {
            console.log(error);
            console.error('Errore durante aggiornamento dati:', error);
            return { error: 'Errore durante aggiornamento dati' };
        }
    }

    const remove = async (id) => {
        try {
            await fetch(apiUrl + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            return id;
        } catch (error) {
            console.log(error);
            console.error('Errore durante la cancellazione dei dati:', error);
            return { error: 'Errore durante la cancellazione dei dati' };
        }
    }
    return { create, getLists, read, update, remove };
}
export default useBooksApi;