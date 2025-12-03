import { siteConfig } from '@/constants/siteConfig';

const Navbar = () => {
  return (
    <div className="shadow">
      <header className="container py-4 px-2 mx-auto flex items-center justify-between">
        <Logo />
        {/* TODO: MAYBE WE ADD THEME TOGGLE HERE */}
        Switch
      </header>
    </div>
  );
};

export default Navbar;

export const Logo = () => (
  <h1 className="font-bold text-xl">{siteConfig.shortName} Store</h1>
);
