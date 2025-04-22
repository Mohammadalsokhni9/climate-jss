import { useRouter } from 'next/router';
import { Link, Image, Text } from "@sitecore-jss/sitecore-jss-nextjs";
//import BrowserPersonalization from '../Browser/BrowserPersonalization';
const Header = ({ fields }: any) => {
  const router = useRouter();
  const { locale, asPath } = router;

  const otherLocale = locale === 'en' ? 'ar' : 'en';

  const switchLanguage = () => {
    router.push(asPath, asPath, { locale: otherLocale });
  };
console.log(fields);
  return (
    <div className="relative z-30 bg-gray-100 p-2">
      <div className="flex items-center justify-between">
        
        <Link field={fields?.Link} className="inline-flex items-center gap-2">
          <Image className="h-10 w-auto" field={fields?.Logo} />
        
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Text field={fields?.Title}  className="text-xl font-semibold text-black" />
          
        </div>
        
        <button
          onClick={switchLanguage}
          className="text-black hover: px-4 py-2 rounded"
        >
          <Text field={fields?.LanguageLable} />
        </button>
      </div>
    </div>
  );
};

export default Header;
