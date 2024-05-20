import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
const detailBookContainerOverStyle = {
  width: '100%',
  border: '1px solid black',
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  overflow: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default function Detail({ element, resource }) {

  const [openDetail, setOpenDetail] = useState(false);
  const [item, setItem] = useState({});


  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => {
      return resource.action.UPDATE_ITEM(data);
    },
    onError: (error, variables, context) => {
      console.log('error', error)

    },
    onSuccess: (data, variables, context) => {
      console.log('success', data)
      queryClient.invalidateQueries({ queryKey: [resource.type] })
      closeDetail();
    },
  })

  const keys = Object.keys(item);
  const keysToShow = resource.fields;
  const filteredKey = keys.filter(item => keysToShow.includes(item));

  console.log('openDetail --> ' + openDetail);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
    setItem(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log('item ---> ', item);
  };

  const showDetail = () => {
    console.log('show');
    setItem(element);
    setOpenDetail(true);
  }

  const closeDetail = () => {
    console.log('show');
    setOpenDetail(false);
  }
  const handleSave = (item) => {
    console.log(item.author);
    mutation.mutate({ id: item._id, body: item });
  }


  return (


    <>
      <IconButton aria-label="edit" onClick={() => showDetail()}>
        <EditIcon />
      </IconButton>
      {openDetail &&


        <div style={detailBookContainerOverStyle}>
          {mutation.isPending ? (<CircularProgress disableShrink />)
            : (

              <div style={{ border: '2px solid black', margin: '0 auto', width: '50%', background: 'lightgrey', marginTop: '10%' }}>
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid #4E5F75', justifyContent: 'space-between', height: '50px', margin: '10px' }}>
                  <h2>Dettagli</h2>
                  <IconButton aria-label="edit" onClick={() => closeDetail()}>
                    <CloseIcon />
                  </IconButton>

                </div>

                <div style={{ display: 'grid', 'gridTemplateColumns': 'auto auto', padding: '5px' }}>
                  <div style={{ display: 'grid', borderRight: '4px solid #4E5F75', padding: '5px', width: '100%' }}>
                    {filteredKey.map(key => {
                      return (

                        < TextField variant="standard" key={key} name={key} value={item[key]} onChange={handleChange} style={{ padding: '5px', margin: '10px' }} />

                      );
                    })}

                    <Button variant="contained" id="saveButton" type="submit" style={{ padding: '5px', margin: '10px', background: '#4E5F75', width: '80px', height: 'fit-content' }} onClick={() => handleSave(item)}>Salva</Button>
                  </div>
                  <img src='https://liftlearning.com/wp-content/uploads/2020/09/default-image.png' />
                </div>
              </div>
            )}
        </div>
      }
    </>

  )
}
