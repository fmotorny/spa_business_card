import type { Schema, Attribute } from '@strapi/strapi';

export interface BodySeo extends Schema.Component {
  collectionName: 'components_body_seos';
  info: {
    displayName: 'SEO';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'body.seo': BodySeo;
    }
  }
}
