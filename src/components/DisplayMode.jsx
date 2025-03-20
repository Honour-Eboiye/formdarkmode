import React, {useState, useEffect} from 'react'
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const DisplayMode = ({info}) => {
  const [isDark, setIsDark] = useState(false);
  const [icon, setIcon] = useState(<BiSolidSun></BiSolidSun>);
  const mode = info;
  const handleDisplay = () =>{
    if(isDark){
      mode.classList.remove('dark');
      setIcon(<BiSolidMoon></BiSolidMoon>);
      setIsDark(false)

    }else{
      mode.classList.add('dark');
      setIcon(<BiSolidSun color='white'></BiSolidSun>);
      setIsDark(true)
    }

  }
  useEffect(() =>{
    handleDisplay();
  },[])
  return (
    <div>
      <button onClick={handleDisplay}>
        {icon}
      </button>
    </div>
  )
}

export default DisplayMode