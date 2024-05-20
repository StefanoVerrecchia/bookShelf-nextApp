const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const useUsersApi = () => {
    const getListsUser = async (signal) => {
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
    
    const removeUser = async (id) => {
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
    return {getListsUser,removeUser};
}
export default useUsersApi;