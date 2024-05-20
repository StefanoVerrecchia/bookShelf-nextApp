
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Logout from './LoginForm/LogOut'
export default function SideMenu(props) {
  return (
    <Stack spacing={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh', width: '230px', 'borderRight': '4px solid #4E5F75', margin: '5px', }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link href='/'      style={{ margin: '5%', 'borderBottom': '1px solid #4E5F75' }}>HOME</Link>
        <Link href='/books' style={{ margin: '5%', 'borderBottom': '1px solid #4E5F75' }}>Books</Link>
        <Link href='/users' style={{ margin: '5%', 'borderBottom': '1px solid #4E5F75' }}>Users</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', 'borderTop': '1px solid #4E5F75', margin: '0 auto', padding: '5%' }}>
      Log-out
        <Logout/>
      </div>
    </Stack>
  )
}

