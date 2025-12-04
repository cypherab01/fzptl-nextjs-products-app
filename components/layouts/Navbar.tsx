import { siteConfig } from '@/constants/siteConfig';

const Navbar = () => {
  return (
    <div className="shadow">
      <header className="container py-4 px-2 mx-auto flex items-center justify-between">
        <Logo />
        <HamBurgerMenu />
      </header>
    </div>
  );
};

export default Navbar;

export const Logo = () => (
  <h1 className="font-bold text-xl">{siteConfig.shortName} Store</h1>
);

const HamBurgerMenu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-menu-icon lucide-menu cursor-not-allowed"
    >
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
};
