import { useCallback, useEffect, useState,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
//useref
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numberAllowed) str += "0123456789";
    if (CharAllowed) str += "!@#$%^&*{}()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, CharAllowed, setPassword]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, CharAllowed, passwordgenerator]);

  const copypasswordtoclipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <> 
      <div
        className="w-full max-w-md mx-auto text-center shadow-md rounded-lg
       px-4 py-7 my-8 bg-gray-800 text-orange-500"
      >
        <h1 className="text-white text-center my-3 ">Password Generator</h1>
       <div className="flex shadow rounded-lg
       overflow-hidden mb-4">
         <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}> 

          </input>
         
         <button 
         onClick={copypasswordtoclipboard}
         className="bg-orange-500 hover:bg-blue-600 text-white px-4 py-1 
         rounded-lg">Copy</button>
       
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min="6"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            />
            <label>length:{length}</label>

        {/* <h1 className="text-white text-center ">Password Generator</h1> */}
      </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            checked={CharAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
            />
            <label>Special Characters</label>
          </div>
        </div>
        <div className="mt-4">
          <button 
          onClick={passwordgenerator}
          className="bg-orange-500 hover:bg-blue-600 text-white px-4 py-1 
         rounded-lg">Generate Password</button>
      </div>
      
      
    </div>  
    </>
  );
}

export default App;
