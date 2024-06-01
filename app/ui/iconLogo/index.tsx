import Image from 'next/image'
import Link from 'next/link';

interface LogoProps  {
    source: string,
    campaignName: string,
    link?: string,
}

const IconLogo = ({source, campaignName, link} : LogoProps) => {
    return (
        <Link href={`/${link}`}>
            <Image
                src={source}
                alt={`Logo for ${campaignName}`}
                width={60}
                height={60}
                className='campaign-icon'
            />        
        </Link>
    );
}

export default IconLogo;