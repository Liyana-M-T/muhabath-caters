import Image from 'next/image'
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='px-5 mt-12 h-[835px]'>
       <Image src="/images/Logo.jpg"  width={56}
      height={56} className='mb-12'/>
      <span className="font-semibold text-[16px]  pb-3">Quick Links</span>
      <div className='flex flex-col pt-3'>
        <p className='pb-2'>Home Page</p>
        <p className='pb-2'>Menu Options</p>
        <p className='pb-2'>Contact Us</p>
        <p className='pb-18'>About Us</p>
      </div>

      <span className="font-semibold text-[16px] pb-3">Stay Connected</span>
      <div className="flex flex-col py-2 space-y-2">
  <p className="flex items-center gap-2">
    <Image src="/images/Facebook.png" width={24} height={24} alt="Facebook" />
    <span>Facebook</span>
  </p>
  <p className="flex items-center gap-2">
    <Image src="/images/Instagram.png" width={24} height={24} alt="Instagram" />
    <span>Instagram</span>
  </p>
  <p className="flex items-center gap-2">
    <Image src="/images/youtube.png" width={24} height={24} alt="YouTube" />
    <span>YouTube</span>
  </p>
</div>
<hr/>
<div className="flex justify-start space-x-4 pt-4 text-sm text-gray-600">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-use" className="hover:underline">
          Terms of Use
        </Link>
        <Link href="/cookie-settings" className="hover:underline">
          Cookie Settings
        </Link>
      </div>
      </div>
  )
}

export default Footer
