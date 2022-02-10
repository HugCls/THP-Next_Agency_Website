import React, {useContext} from 'react';
import DarkMode from '../components/DarkMode';


const NotFound = () => {
  const { darkMode } = useContext(DarkMode)
  
  return (
    <main className={darkMode?"not-found dark":"not-found"}>
      <div className='not-found-content'>
        <h1>404 Not Found</h1>
        <h2>La page que vous cherchez n'existe pas...</h2>
      </div>
    </main>
  );
};

export default NotFound;