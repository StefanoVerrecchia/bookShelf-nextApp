
import useUsersApi from './hooks/useUsersApi';
import useBooksApi from './hooks/useBooksApi';
const getResource = (type) => {
    let resource = {};
    switch (type) {
        case ('users'):
            const { getListsUser, removeUser } = useUsersApi();
            resource = {
                type: 'users',
                key: 'name',
                fields: ['name', 'username', 'email', 'phone', 'website'],
                action: {
                    GET_LIST: getListsUser,
                    REMOVE_ITEM: removeUser,
                    CREATE_ITEM: null,
                    READ_ITEM: null,
                    UPDATE_ITEM: null,
                }
            };
            return resource;

        case ('books'):
            const { getLists, create, read, remove, update } = useBooksApi();
            resource = {
                type: 'books',
                key: 'title',
                fields: ['title', 'author', 'publicationDate'],
                action: {
                    GET_LIST: getLists,
                    CREATE_ITEM: create,
                    READ_ITEM: read,
                    REMOVE_ITEM: remove,
                    UPDATE_ITEM: update
                }
            };
            return resource;

        default:
            resource = null;
    }

}
export default getResource;
