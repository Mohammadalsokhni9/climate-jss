import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the GraphQL-Layout component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function GraphQLLayout(manifest: Manifest): void {
  manifest.addComponent({
    name: 'GraphQL-Layout',
    templateName: 'GraphQL-Layout',
    icon: SitecoreIcon.Layout,
    placeholders: ['jss-graphql-layout'],
  });
  
}
