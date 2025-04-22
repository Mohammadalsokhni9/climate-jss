import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';


// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  pageTitle: Field;
  
 
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route, context } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;

  return (
    <>
      <Scripts />
      <Head>
      <title>{fields?.pageTitle?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
       
   

      
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      {route && (
          <Placeholder
            name="jss-header"
            rendering={route}
            isRtl={`${context?.language === 'en' ? false : true}`}
          />
        )}
      <div className="latin" dir={context?.language === 'en' ? 'ltr' : 'rtl'}>{route && <Placeholder name="jss-main" rendering={route} isRtl={`${context?.language === 'en' ? false : true}`}/>}</div>
    </>
  );
};

export default Layout;
