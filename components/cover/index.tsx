import React, { FC } from 'react';
import cls from 'classnames';
import Iconfont from '@/components/iconfont';
import styles from './index.module.scss';

const texts = [
  '博',
  '客',
  '小',
  '站'
];

interface CoverProps {
  onOpen?: () => void
}

const Cover: FC<CoverProps> = ({
  onOpen
}) => (
  <div className={styles.container}>
    <div className={cls(styles.wrapper)}>
      {texts.map((item, index) => (
        <div
          key={index}
          className={cls(
            styles.item,
            styles[`spread_item_${index}`], 'hvr-pulse')}
        >
          {item}
        </div>
      ))}
      <span onClick={onOpen}>
        <Iconfont
          className={cls(styles['icon-arrow'], 'animate__animated', 'animate__bounce', 'animate__infinite')}
          type="icon-arrow-double-down"
        />
      </span>
      <div className={styles.liner}></div>
    </div>
  </div>
)

export default Cover;