import React from "react";

const Footer = () => {
  return (
    <div className="px-0 lg:px-20 bg-[#00a700]">
      {/* Main footer links */}
      <footer className="footer sm:footer-horizontal text-white p-10">
        <nav>
          <h6 className="text-white text-xl font-bold mb-2">Products</h6>
          <a className="link link-hover">Indoor Plants</a>
          <a className="link link-hover">Outdoor Plants</a>
          <a className="link link-hover">Flowering Plants</a>
          <a className="link link-hover">Trees</a>
        </nav>
        <nav>
          <h6 className="text-white text-xl font-bold mb-2">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <h6 className="text-white text-xl font-bold mb-2">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>

      {/* Bottom footer */}
      <footer className="footer flex justify-between items-center text-white border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <div className="bg-white rounded p-1">
            <img src="/logo.png" alt="GreenNest Logo" className="lg:w-[50px] w-[100px]" />
          </div>
          <div className="self-start ml-2">
            <p className="text-xl font-bold mb-1">GreenNest</p>
            <span className="text-gray-200">Selling plants and trees with care since 2010</span>
          </div>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                <path d="M12 0C5.372 0 0 5.373 0 12c0 4.991 3.657 9.128 8.438 10.124-.117-.86-.223-2.183.046-3.125.242-.84 1.562-5.355 1.562-5.355s-.398-.796-.398-1.972c0-1.848 1.071-3.225 2.402-3.225 1.133 0 1.68.85 1.68 1.87 0 1.138-.723 2.842-1.096 4.421-.312 1.32.663 2.395 1.965 2.395 2.359 0 4.177-2.486 4.177-6.079 0-3.177-2.285-5.399-5.548-5.399-3.779 0-6.004 2.834-6.004 5.764 0 1.138.438 2.358.984 3.022.108.13.123.243.092.375-.1.406-.328 1.32-.375 1.504-.059.242-.195.293-.451.176-1.68-.783-2.734-3.24-2.734-5.215 0-4.244 3.086-8.144 8.906-8.144 4.672 0 8.305 3.332 8.305 7.782 0 4.648-2.93 8.391-6.995 8.391-1.367 0-2.656-.71-3.098-1.551l-.84 3.203c-.305 1.164-1.133 2.621-1.688 3.508C9.93 23.812 10.954 24 12 24c6.628 0 12-5.373 12-12S18.628 0 12 0z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <hr className="text-gray-200" />

      <p className="text-gray-200 text-center py-5">
        &copy; 2025 GreenNest.
        <span className="block text-sm text-gray-300">All rights reserved.</span>
      </p>
    </div>
  );
};

export default Footer;
