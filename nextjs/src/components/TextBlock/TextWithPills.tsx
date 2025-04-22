import {
  Text,
  
  LinkField,
  withDatasourceCheck,
 
  ImageField,
  TextField,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';


type TextWithPillsProps = ComponentProps & {
  fields: {
    Title: TextField;
    Summary: TextField;
    Image: ImageField;
    Icon: ImageField;
    Description: RichTextField;
    SelectedItems: Array<any>;
    Link: LinkField;
    VideoLink: LinkField;
    SelectedImages: Array<any>;
    IconsTitle: TextField;
    SelectedIcons: Array<any>;
  };
};

const TextWithPills = ({ fields }: TextWithPillsProps): JSX.Element => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
      <div className="max-w-2xl mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      <Text field={fields?.Title} />
      </h1>
      <div className="mb-8 text-lg font-normal text-gray-500 lg:mb-12 lg:text-xl dark:text-gray-400">
      <RichText field={fields?.Description} />
      </div>
      
    </div>
    <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
    {fields?.SelectedItems?.map((item: any, index: number) => {
  const title = item?.fields?.Title?.value;
  const summary = item?.fields?.Summary?.value;
  // const textColor = item?.fields?.TextColor?.value || 'text-primary-800';
  // const bgColor = item?.fields?.BackgroundColor?.value || 'bg-primary-100';
  // const darkText = item?.fields?.DarkTextColor?.value || 'dark:text-primary-300';
  // const darkBg = item?.fields?.DarkBgColor?.value || 'dark:bg-primary-900';
  return (
    <div
    key={index}
    className={`p-4 text-primary-700 bg-primary-100 rounded-lg dark:bg-primary-900 dark:text-primary-300`}
  >
    <h2 className="text-3xl font-extrabold leading-tight">{title}</h2>
    <span className={`text-primary-500 dark:text-primary-400`}>
      {summary}
    </span>
  </div>
  );
})}
      </div>
      </div>
      </section>

  );
};

export default withDatasourceCheck()<TextWithPillsProps>(TextWithPills);
