import logoWhite from "../assets/img/logo-white.svg";
import fb from "../assets/icon/fb.svg";
import instagram from "../assets/icon/instagram.svg";
import linkedin from "../assets/icon/linkedin.svg";
import twitter from "../assets/icon/twitter.svg";
import { Link } from "react-router-dom";


<footer className="bg-[#2E2100]">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 p-6 md:p-10">
    {/* 1 */}
    <section>
      <img src={logoWhite} alt="Lesson logo" />
      <p className="text-[#BFBCB2] text-sm mt-5 mb-3">
        Need help for your dream career? Trust us. With Lesson, study becomes a lot easier.
      </p>
      <div className="flex gap-5">
        <img src={fb} alt="Facebook icon" />
        <img src={instagram} alt="Instagram icon" />
        <img src={linkedin} alt="LinkedIn icon" />
        <img src={twitter} alt="Twitter icon" />
      </div>
    </section>

    {/* 2 */}
    <section>
      <h3 className="text-white font-semibold border-b pb-3 uppercase tracking-wide">Support</h3>
      <nav className="flex flex-col text-[#BFBCB2] space-y-1.5 mt-5">
        <Link to="/">About Us</Link>
        <Link to="/">Consistent</Link>
        <Link to="/">Never Give Up</Link>
        <Link to="/">Latest News</Link>
      </nav>
    </section>

    {/* 3 */}
    <section>
      <h3 className="text-white font-semibold border-b pb-3 uppercase tracking-wide">Company</h3>
      <nav className="flex flex-col text-[#BFBCB2] space-y-1.5 mt-5">
        <Link to="/">About Us</Link>
        <Link to="/">Feature</Link>
        <Link to="/">Our Pricing</Link>
        <Link to="/">Latest News</Link>
      </nav>
    </section>

    {/* 4 */}
    <section>
      <h3 className="text-white font-semibold border-b pb-3 uppercase tracking-wide">Address</h3>
      <address className="flex flex-col space-y-3 mt-4 text-[#BFBCB2] not-italic">
        <p><strong className="text-white">Location:</strong> 27 Division St, New York, NY 10002, USA</p>
        <p><strong className="text-white">Email:</strong> email@gmail.com</p>
        <p><strong className="text-white">Phone:</strong> +000 1234 567 890</p>
      </address>
    </section>
  </div>
</footer>

export default Footer;
