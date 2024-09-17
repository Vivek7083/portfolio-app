import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin, FaXTwitter, FaInstagram, FaGithub} from 'react-icons/fa6'

export default function Navbar(){
    return(
        <>
        <nav className="mb-20 py-6 flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-2 w-10' src={logo} alt="Logo"/>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin/>
                <FaGithub/>
                <FaInstagram/>
                <FaXTwitter/>
            </div>
        </nav>
        </>
    )
}