import IconLogo from "../iconLogo";

const Header = () => {
  return (
    <header className="flex justify-between h-auto items-center py-2.5 bg-blue-900">
      <div className="pl-5">
        <IconLogo source="/cag_logo.jpg" campaignName="CAG" link="/" />
      </div>
      <div className="flex justify-evenly w-full">
        <IconLogo
          source="/aa_logo.png"
          campaignName="Assurance America"
          link="assurance"
        />
        <IconLogo
          source="/monarch_logo.webp"
          campaignName="Monarch National"
          link="monarch"
        />
        <IconLogo
          source="/sc_logo.jpg"
          campaignName="Star Casualty"
          link="star"
        />
        <IconLogo
          source="/cumberland_logo.jpg"
          campaignName="Cumberland Mutual"
          link="cumberland"
        />
        <IconLogo
          source="/farmers_logo.jpg"
          campaignName="Farmers of Salem"
          link="farmers"
        />
        <IconLogo
          source="/kanguro_logo.png"
          campaignName="Kanguro Insurance"
          link="kanguro"
        />
      </div>
    </header>
  );
};

export default Header;
