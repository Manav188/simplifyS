import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.png'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className=' pt-5 flex justify-evenly'>
          <a href='/'>
            <div  className=' flex  '>
            <img src={logo} alt='Logo' className=' size-7' />
            <div className=' font-bold tracking-wider text-xl '>
              GA4 Auditor
            </div>
          </div>
          </a>
          <div className=' flex  justify-between font-light gap-x-9 '>
            <div>Pricing</div>
            <a href='#features'>Features</a>
            <div>Blog</div>
          </div>
          <div>
            <div>
              <div className='flex'>
                <div className='font-light   items-center'>
                  <FontAwesomeIcon className='color-black size-4' icon={faLock} />
                  Login
                </div>
                <button className="bg-black font- text-sm text-white rounded-lg p-2 ml-2 -mt-1.5">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header