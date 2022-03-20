import { useState } from 'react';

function Main() {
  const [baseColor, setBaseColor] = useState("orange");

  function settingColor(userChoice) {
    if (userChoice.target.value === "") {
      setBaseColor(baseColor)
    } else {
      setBaseColor(userChoice.target.value)
    }
  }

  return (
    <div className="parentDiv">
      <div className="childDiv" style={{backgroundColor: baseColor}}>
      <input className="text-box" placeholder="Type Any Color." onChange={(baseColor) => settingColor(baseColor)}/>

      </div>
    </div>
  )
}

export default Main;
