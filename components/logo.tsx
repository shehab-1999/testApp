import { Code2 } from "lucide-react"
import { useTheme } from "next-themes";
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
   const { theme } = useTheme();
   
  return (
    <div className={`${className}`}>
      <div className="z-50" >
      
        <Image height={100} width={1000} alt="" src={`/images/${theme=="dark"?'logo.png':'logo_black.png'} `} className={`w-[150px]`}/>
      </div>
   
    </div>
  )
}