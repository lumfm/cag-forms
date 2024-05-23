import IconLogo from "../iconLogo";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full flex justify-between items-center py-2.5 bg-primary">
      <div className="pl-5">
        <IconLogo source="/cag_logo.jpg" campaignName="CAG" link="/" />
      </div>
      <div className="flex justify-evenly w-full">
        <IconLogo
          source="/aa_logo.jpg"
          campaignName="Assurance America"
          link="assurance"
        />
        <IconLogo
          source="/monarch_logo.jpg"
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
