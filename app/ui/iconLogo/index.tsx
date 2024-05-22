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
                width={85}
                height={85}
                className='rounded-lg shadow-lg shadow-blue-950'
            />        
        </Link>
    );
}

export default IconLogo;