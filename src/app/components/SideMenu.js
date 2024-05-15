
import Stack from '@mui/material/Stack';
import Link from 'next/link';
export default function SideMenu(props) {
  return (
      <Stack spacing={2} style={{ height:'100vh' , width:'230px', border: '2px solid black', margin: '5px' , }}>
        <Link href= '/'>HOME</Link>
        <Link href= '/books'>Books</Link>
      </Stack>
  )
}

