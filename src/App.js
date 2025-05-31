import Nav from './components/Nav';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className='bg-[#000]'>
      <Nav />
      <Analytics />
    </div>
  );
}

export default App;
