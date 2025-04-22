// import{ Form } from '@sitecore-jss/sitecore-jss-react-forms';
// import React from 'react';
// import{ withRouter } from 'next/router';
// import{ sitecoreApiHost, sitecoreApiKey } from  'temp/config';

// const Forms = ({ fields, router }: any)=>(
//   <section className='bg-white dark:bg-gray-900 pb-20'>
//     <Form
//       form={fields}
//       sitecoreApiHost={''}
//       sitecoreApiKey={sitecoreApiKey}
//       className='class="max-w-sm mx-auto"'
//       onRedirect={(url)=> router.push(url)}
//     />
//     </section>
// );
// export default withRouter(Forms);
import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import React from 'react';
import { NextRouter, withRouter } from 'next/router';
import { sitecoreApiHost, sitecoreApiKey } from 'temp/config';

const Forms = ({ fields, router }: { fields: any; router: NextRouter }) => {
  return (
    <section className='bg-white dark:bg-gray-900 pb-20'>
    <Form
      language={router.locale}
      form={fields}
      sitecoreApiHost={''}
      sitecoreApiKey={sitecoreApiKey}
      className="max-w-sm mx-auto"
      onRedirect={(url) => router.push(url)}
    />
    </section>
  );
};
export default withRouter(Forms);