import React from 'react'
interface TypeInput{
    text?:string;
    className?:string;
}
export default function Button({text,className}:TypeInput) {
  return (
    <button className={`${className} bg-[#fed701]   xl:text-2xl  lg:text-xl text-black px-6 py-2  rounded-lg font-medium hover:bg-[#fed701] transition`}>{text}</button>
  )
}
