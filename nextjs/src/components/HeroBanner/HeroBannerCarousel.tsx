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



import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type HeroBannerCarouselProps = ComponentProps & {
  fields: {
    Title: TextField;
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

const HeroBannerCarousel = ({ fields }: HeroBannerCarouselProps): JSX.Element => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                <Text field={fields?.Title} />
              </h2>
              <div className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl sm:text-xl">
                <RichText field={fields?.Description} />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 sm:flex-row">
              <a
                href={fields.Link.value.href}
                role="button"
                aria-label={fields.Link.value.text}
                className="sm:w-[182px] px-6 py-3 w-full text-base font-medium text-center text-white bg-primary-700 rounded-lg shrink-0 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                target={fields.Link.value.target === '_blank' ? '_blank' : undefined}
                rel={fields.Link.value.target === '_blank' ? 'noopener noreferrer' : undefined}
                title={fields.Link.value.title || undefined}
              >
                {fields.Link.value.text}
              </a>

              {fields?.VideoLink?.value?.href && (
                <a
                  href={fields.VideoLink.value.href}
                  title={fields.VideoLink.value.title || ''}
                  target={fields.VideoLink.value.target === '_blank' ? '_blank' : undefined}
                  rel={fields.VideoLink.value.target === '_blank' ? 'noopener noreferrer' : undefined}
                  role="button"
                  className="sm:w-[182px] inline-flex w-full justify-center items-center px-6 py-3 text-base font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  {fields.VideoLink.value.text}
                </a>
              )}
            </div>

            <div className="mt-4 sm:border-t sm:border-gray-100 sm:mt-8 sm:pt-8 dark:border-gray-700">
              <p className="hidden text-base font-medium text-gray-500 sm:block">
                <Text field={fields?.IconsTitle} />
              </p>
              <div className="flex items-center mt-3 max-w-md">
                {fields?.SelectedIcons?.map((item: any, index: number) => {
                  const iconField = item?.fields?.Icon;

                  return (
                    <Image
                      key={index}
                      field={iconField}
                      className={`w-auto h-8 md:h-12 ${
                        index !== fields.SelectedIcons.length - 1 ? 'mr-4' : ''
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div id="default-carousel" className="relative w-full" data-carousel="slide">
          <Slider {...settings}>
    {fields?.SelectedImages?.map((item: any, index: number) => {
      const imageField = item?.fields?.Image; // Replace 'Image' with actual field name if different

      return (
        <div key={index}>
          <Image field={imageField} className="w-full h-auto" />
        </div>
      );
    })}
  </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<HeroBannerCarouselProps>(HeroBannerCarousel);
