import { useAuth } from '../src/Components/AuthProvider';
import Hero from '../src/Components/Hero';
import Nav from '../src/Components/Nav';


export default function HomePage() {
  const {user} = useAuth();
  return (
    <>
    {user ? <NavUser /> : <Nav/>}
    <Hero />
    
    </>
  )
}