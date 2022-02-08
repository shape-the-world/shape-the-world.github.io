import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Global',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      A global network for leveraging shape modelling to address local challenges.
      </>
    ),
  },
  {
    title: 'FAIR & Open',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Findable, Accessible, Interoperable and Reusable
        shape modelling solutions, based on open software and open data.
      </>
    ),
  },
  {
    title: 'Socially responsive',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Producing and sharing knowledge for the public good.
      </>
    ),
  },
   {
    title: 'Impactful',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fully developed use cases which are easy to adapt and deploy in real world settings.
      </>
    ),
  },
];


const LogoList = [
  {
    title: '',
    Svg: require('../../static/img/uct-logo.svg').default,
  },
  {
    title: '',
    Svg: require('../../static/img/unibasel-logo.svg').default,
  },

];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Logo({Svg, title}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
    </div>
  );
}

/*
// Version with logo
export default function HomepageFeatures() {
  return (
    <div>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section className={styles.features+ " logo-row"}>
      <div className="container">
        <div className="row">
          {LogoList.map((props, idx) => (
            <Logo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section> 
    </div>
  );

}*/


export default function HomepageFeatures() {
  return (
    <div>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );

}