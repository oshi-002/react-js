import { useState, useCallback, useEffect, useRef } from 'react'




function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState()

  //to use useRef , you need to make it a variabale
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhghijklmnopqrstuvwxyz"
    //condition
    if (number) str += "0123456789"
    if (characters) str += "!@#$*_~"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // this char gives any random value from array index not from string

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [characters, length, number, setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [number, length, characters])
  return (
    <>
      <div className='w-full h-20 max-w-md mx-auto text-center shadow-md rounded-lg px-7 my-16 text-orange-400 bg-gray-700'>
        <h1 className='text-white text-center '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 my-4 rounded-md'
            placeholder='Enter Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-2 my-4 rounded-md hover:bg-black'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={7}
              max={40}
              value={length}
              className='cursor-pointer '
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev)
              }}

            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characters}
              onChange={() => {
                setCharacters((prev) => !prev)
              }}

            />
            <label>Characters</label>
          </div>
        </div>

      </div>

    </>

  )
}
export default App
