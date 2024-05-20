
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Logout from '../LoginForm/LogOut'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';
import { useState } from 'react';

const menuVoices = [
  { name: 'HOME', link: '/', image: <HomeIcon /> },
  { name: 'BOOKS', link: '/books', image: <LibraryBooksIcon /> },
  { name: 'USERS', link: '/users', image: <GroupIcon /> }

]
const CustomLink = ({ href, image, name }) =>{
  const [isHovered, setIsHovered] = useState(false);
  const styleLink = {
    margin: '5%',padding:'5%',
    borderBottom: '1px solid #4E5F75',
    backgroundColor: isHovered ? '#4E5F75' : '',
    color: isHovered ? 'white' : 'inherit',
  }
  return (
    <Link key={name}
          href={href}
          style={styleLink}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
    >
      {image}<span>{name}</span>
    </Link>
  );

}
const VoiceMenu = () => {
  return (
    menuVoices.map((el) => (
      <CustomLink key={el.name} href={el.link} image={el.image} name={el.name}/>
    ))
  )
}
export default function SideMenu(props) {

  return (
    <Stack spacing={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh', width: '230px', 'borderRight': '4px solid #4E5F75', margin: '5px', }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <VoiceMenu />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5%' }}>
        Log-out
        <Logout />
      </div>
    </Stack>
  )
}

