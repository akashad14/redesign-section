const Footer: React.FC = () => {
    return (
      <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-4 mb-8">
          <img src="/image/logo-dark.webp" alt="Logo" className="w-[10rem] h-[10rem]" />
          <h2 className="text-4xl font-semibold">Everything Talent</h2>
        </div>
  
        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          
          {/* Resources */}
          <div className="flex flex-col space-y-5">
            <p className="text-white font-semibold">Resources</p>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Blogs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Whitepapers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Hiring Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Support</a></li>
            </ul>
          </div>
  
          {/* Get Started */}
          <div className="flex flex-col space-y-5">
            <p className="text-white font-semibold">Get Started</p>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Hiring Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Funded Startups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Free Trial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Request Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Trust</a></li>
            </ul>
          </div>
  
          {/* Legal */}
          <div className="flex flex-col space-y-5">
            <p className="text-white font-semibold">Legal</p>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">CCPA Compliance</a></li>
            </ul>
          </div>
  
        </div>
      </div>
    </footer>
    );
  };
  
  const SkylineFooter: React.FC = () => {
    return (
      <footer className="bg-black text-white pb-4">
        
        {/* Skyline Image */}
        <div className="flex justify-center">
          <img
            src="/image/footer image.webp" // Replace with actual path to your skyline image
            alt="City Skyline"
            className="w-full max-w-8xl"
          />
        </div>
  
       
        <div className="flex justify-between items-center mt-4 max-w-7xl mx-auto">
          <div className="text-left">
            <p className="text-gray-400 text-sm">© 2024 Everything Talent Labs, LLC. All Rights Reserved.</p>
          </div> 
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.55-1.36 1.87-2.35-.82.49-1.73.85-2.7 1.04a4.5 4.5 0 0 0-7.67 4.1c-3.73-.2-7.05-1.97-9.27-4.7a4.5 4.5 0 0 0 1.4 6.01A4.6 4.6 0 0 1 1.64 9v.06a4.5 4.5 0 0 0 3.61 4.41c-.64.17-1.3.2-1.98.08a4.5 4.5 0 0 0 4.21 3.13A9 9 0 0 1 1 18.58a12.7 12.7 0 0 0 6.86 2c8.27 0 12.8-6.86 12.8-12.8 0-.2 0-.39-.01-.59A9.18 9.18 0 0 0 24 4.5a9.13 9.13 0 0 1-2.54.69z" />
              </svg>
            </a>
    
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z">
              </path></svg>
            </a>
          
            <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path></svg>
            </a>
          </div>
        </div>
        
      </footer>
    );
  };
  const main = () => {
    return (
      <main>
       
        <Footer/>
        <SkylineFooter/>
      </main>
    );
  };
  
export default main;
  