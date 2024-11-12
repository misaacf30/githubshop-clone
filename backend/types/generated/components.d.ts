import type { Schema, Struct } from '@strapi/strapi';

export interface HomeCategoryCard extends Struct.ComponentSchema {
  collectionName: 'components_home_category_cards';
  info: {
    displayName: 'CategoryCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeCategoryCardDesc extends Struct.ComponentSchema {
  collectionName: 'components_home_category_card_descs';
  info: {
    displayName: 'CategoryCardDesc';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    button: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeRow2Categories extends Struct.ComponentSchema {
  collectionName: 'components_home_row2_categories';
  info: {
    displayName: 'Row2Categories';
  };
  attributes: {
    firstCategory: Schema.Attribute.Component<
      'home.category-card-desc',
      false
    > &
      Schema.Attribute.Required;
    secondCategory: Schema.Attribute.Component<
      'home.category-card-desc',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface HomeRow3Categories extends Struct.ComponentSchema {
  collectionName: 'components_home_row3_categories';
  info: {
    description: '';
    displayName: 'Row3Categories';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    firstCategory: Schema.Attribute.Component<'home.category-card', false> &
      Schema.Attribute.Required;
    secondCategory: Schema.Attribute.Component<'home.category-card', false>;
    thirdCategory: Schema.Attribute.Component<'home.category-card', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.category-card': HomeCategoryCard;
      'home.category-card-desc': HomeCategoryCardDesc;
      'home.hero': HomeHero;
      'home.row2-categories': HomeRow2Categories;
      'home.row3-categories': HomeRow3Categories;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
