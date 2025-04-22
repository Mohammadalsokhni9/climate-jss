import {
  Text,
  
  LinkField,
  withDatasourceCheck,
 
  ImageField,
  Image,
  TextField,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';


type TextBlockProps = ComponentProps & {
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

const TextBlock = ({ fields }: TextBlockProps): JSX.Element => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      <Text field={fields?.Title} />
      </h2>
      <div className="text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl sm:text-xl">
  <RichText field={fields?.Description} />
</div>
      <div className="grid gap-8 lg:grid-cols-2">

      {fields?.SelectedItems?.map((item: any, index: number) => {
  const linkField = item?.fields?.Link;
  const titleField = item?.fields?.Title;
  const iconField = item?.fields?.Icon;

  if (!linkField?.value?.href) return null;

  return (
    <a
      key={index}
      href={linkField.value.href}
      className="inline-flex justify-center items-center px-4 py-4 text-base font-medium text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
      target={linkField.value.target === '_blank' ? '_blank' : undefined}
      rel={linkField.value.target === '_blank' ? 'noopener noreferrer' : undefined}
      title={linkField.value.title || undefined}
    >
      <Image
        isLCP={true}
        field={iconField}
        className="mr-3 w-5 h-5"
      />

      <span className="w-full">
        {titleField?.value || linkField.value.text}
      </span>

      <svg
        className="ml-3 w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
})}


      </div>
      </div>
      </section>

  );
};

export default withDatasourceCheck()<TextBlockProps>(TextBlock);
