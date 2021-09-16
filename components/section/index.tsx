import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

interface SectionProps {
  title: ReactNode,
  children: ReactNode
}

const Section: FC<SectionProps> = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};
