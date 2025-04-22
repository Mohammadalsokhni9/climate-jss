import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DemoProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Demo = (props: DemoProps): JSX.Element => (
  <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
          <div>
      <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  Making earth cooler for people, nature, climate
                </h2>
                <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl sm:text-xl">
                  Protecting the planet and its natural resources for future
                  generations by reducing pollution, promoting sustainability,
                  and conserving energy and resources.
                </p>
    <Text field={props.fields.heading} />
    </div>
  </div>
  </div>
  </div>
  </section>
);

export default withDatasourceCheck()<DemoProps>(Demo);
