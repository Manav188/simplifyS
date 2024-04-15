import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='pt-5 flex justify-evenly'>
      <Link to='/'>
        <div className='flex'>
          <img src={logo} alt='Logo' className='size-7' />
          <div className='font-bold tracking-wider text-xl'>
            GA4 Auditor
          </div>
        </div>
      </Link>
      <div className='flex justify-between font-light gap-x-9'>
        <a href="/#pricing">Pricing</a>
        <a href="/#features">Features</a>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <div className='flex'>
          <FontAwesomeIcon className='color-black size-4' icon={faLock} />
          <span className='items-center'>Login</span>
          <button className="bg-black text-sm text-white rounded-lg p-2 ml-2 -mt-1.5">
            Get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;