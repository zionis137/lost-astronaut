import React from 'react'
import CMS from 'netlify-cms'

// load a global CSS FOR THE PREVIEW !!
// is bundled with the other CSS in a stylesheet
// look at webpack.config.js
import '../src/layouts/reset.less'
import '../src/layouts/font.less'

import { TeamPageTemplate } from 'site/templates/team-page/team-page';
import { IndexPageTemplate } from 'site/templates/index-page/index-page';
import { KontaktPageTemplate } from 'site/templates/kontakt-page/kontakt-page';
import { ArtikelPageTemplate } from 'site/templates/artikel-page/artikel-page';
import { PortfolioPostTemplate } from 'site/templates/portfolio-post/portfolio-post';



/*
*   Team-Section
*/
const TeamPreview = ({ entry, widgetFor, getAsset }) => {
  const entryMitarbeiter = entry.getIn(['data', 'mitarbeiter'])
  const mitarbeiter = entryMitarbeiter ? entryMitarbeiter.toJS() : []

  return <TeamPageTemplate title={entry.getIn(['data', 'title'])} image={entry.getIn(['data', 'image'])}
      text={widgetFor('body')} mitarbeiter={mitarbeiter} />
  };

  CMS.registerPreviewTemplate('team', TeamPreview);



  /*
  *   Index-Section
  */
const IndexPreview = ({ entry, widgetFor, getAsset }) => {
  const entrySlogans = entry.getIn(['data', 'slogan']);
  const slogans = entrySlogans.toJS()

  const entryKunden = entry.getIn(['data', 'kunden']);
  const kunden = entryKunden ? entryKunden.toJS() : []

  const box = entry.getIn(['data', 'box']).toJS();

  const content = entry.getIn(['data']).toJS()
  return <IndexPageTemplate {... content}
    kundenTitle = {content.kunden.title}
    kunden = {content.kunden.kunde}/>
  };

  CMS.registerPreviewTemplate('index', IndexPreview);

  /*
  *   Kontakt-Section
  */
const KontaktPreview = ({ entry, widgetFor, getAsset }) => {
  return <KontaktPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    text={widgetFor('body')}  />
  };

  CMS.registerPreviewTemplate('kontakt', KontaktPreview);


    /*
    *   Artikel-Section
    */
  const ArtikelPreview = ({ entry, widgetFor, getAsset }) => {
    return <ArtikelPageTemplate
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'image'])}
      text={widgetFor('body')}  />
    };

    CMS.registerPreviewTemplate('impressum', ArtikelPreview);
    CMS.registerPreviewTemplate('404', ArtikelPreview);
    CMS.registerPreviewTemplate('portfolioPage', ArtikelPreview);



    /*
    * PortfolioPostTemplate
    */
    const PortfolioPostPreview = ({ entry, widgetFor, getAsset }) => {
      const content = entry.getIn(['data']).toJS()

      return <PortfolioPostTemplate {... content}
        text = {widgetFor('body')}
         />
      };

      CMS.registerPreviewTemplate('portfolioPost', PortfolioPostPreview);


  CMS.registerPreviewStyle('/admin/cms.bundle.css')

/*
import Features from 'site/components/Features'
import Testimonials from 'site/components/Testimonials'
import Pricing from 'site/components/Pricing'

import { AboutPageTemplate } from 'site/templates/about-page';
import { ProductPageTemplate } from 'site/templates/product-page';
import { BlogPostTemplate } from 'site/templates/blog-post';

const AboutPagePreview = ({ entry, widgetFor }) =>
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />;

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

const ProductPagePreview = ({ entry, widgetFor, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return <ProductPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
    description={entry.getIn(['data', 'description'])}
    intro={{ blurbs }}
    main={{
      heading: entry.getIn(['data', 'main', 'heading']),
      description: entry.getIn(['data', 'main', 'description']),
      image1: {
        image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
        alt: entry.getIn(['data', 'main', 'image1', 'alt']),
      },
      image2: {
        image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
        alt: entry.getIn(['data', 'main', 'image2', 'alt']),
      },
      image3: {
        image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
        alt: entry.getIn(['data', 'main', 'image3', 'alt']),
      },
    }}
    fullImage={entry.getIn(['data', 'full_image'])}
    testimonials={testimonials}
    pricing={{
      heading: entry.getIn(['data', 'pricing', 'heading']),
      description: entry.getIn(['data', 'pricing', 'description']),
      plans: pricingPlans,
    }}
  />;
}

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
*/
