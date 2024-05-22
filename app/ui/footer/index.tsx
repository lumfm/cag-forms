import IconLogo from "../iconLogo";

const Footer = () => {
  return (
    <div className="flex justify-between h-14 items-center bg-blue-950">
      <div className="flex items-center w-14 h-14 mx-4">
        <IconLogo source="/tso_logo.png" campaignName="Telesupport" link="/"/>
      </div>
      <p className="text-lg font-medium text-yellow-600 pr-7">
        Created By Mowgli
      </p>
    </div>
  );
};

export default Footer;
