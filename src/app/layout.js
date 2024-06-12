import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ViralClothes | The best viral outfits for everyone",
  description: "ViralClothes | The best viral outfits for everyone",
  icon: 'logo.jpg',

};

async function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="favicon.ico"
/>

      </head>


      <body className={inter.className}>

      <header className=" flex items-center justify-between bg-[#1A0B2E] ">
        <div className="navbar flex flex-col md:flex-row">
          <div className="flex-1 justify-center align-middle items-center" >
            <Link href="/" className="md:ml-60 ml-10">
              <img className="md:w-[70%] w-[50%]" src="https://i.ibb.co/rd0pYh7/logo.png"/>
            </Link>
          </div>

          <ul className="menu menu-horizontal px-2  text-[12px] md:text-[16px] gap-15 md:gap-20 md:mr-40 ">
            <li style={{color:"white"}}>
              <Link href="/">Home</Link>
            </li>
            <li style={{color:"white"}}>
              <Link href="/#about">About</Link>
            </li>
            <li style={{color:"white"}}>
              <Link href="mailto:maciej.b4scik@gmail.com">Lab</Link>
            </li>
            <li style={{color:"white"}}>
              <Link href="mailto:maciej.b4scik@gmail.com">Contact</Link>
            </li>
          </ul>
        </div>
</header>

        
        {children}





    </body>
    </html>
  );
}

export default RootLayout;