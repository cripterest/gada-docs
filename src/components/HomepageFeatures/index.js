import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        Gada API allows companies to implement a centralized NFT store on their website.
      </>
    ),
  },
  {
    title: 'Custom',
    Svg: require('@site/static/img/custom.svg').default,
    description: (
      <>
        If you do not have a technical team, we take care of everything, carrying out a custom job.
      </>
    ),
  },
  {
    title: 'Plug & play',
    Svg: require('@site/static/img/plug.svg').default,
    description: (
      <>
        Download our Cripterest NFT plugin and create your NFT store in a matter of minutes. Coming soon
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
