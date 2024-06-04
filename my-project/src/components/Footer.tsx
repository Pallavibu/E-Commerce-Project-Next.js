import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/*TOP*/}
      <div>
        {/*LEFT*/}
        <div className="w-1/4">
          <Link href="/">
            <div className="text-2xl tracking-wide">PALLAVI</div>
          </Link>
          <p>1234 Winding Way. Central Fort, Hyderabad Road, CA 12345, India</p>
          <span>pallavibu44@gmail.com</span>
          <span>+91-6364164603</span>
        </div>
        {/*CENTER*/}
        <div className="w-1/2"></div>
        {/*RIGHT*/}
        <div className="w-1/4"></div>
      </div>
      {/*BOTTOM*/}
      <div></div>
    </div>
  );
};

export default Footer;
