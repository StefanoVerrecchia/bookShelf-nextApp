
import useUsersApi from './hooks/useUsersApi';
import useBooksApi from './hooks/useBooksApi';
const getResource = (type) => {
    
    let resource = {};
    switch (type) {
        case ('users'):
            resource = { type: 'users', key: 'name' , fields : ['name','username','email','phone','website']};
            return resource;

        case ('books'):
            resource = { type: 'books', key: 'title' ,fields : ['title','author','publicationDate']};
            return resource;
    }

}
export default getResource;
