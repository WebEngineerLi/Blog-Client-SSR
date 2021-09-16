import React from 'react';
import Iconfont from '@/components/iconfont';
import { useDispatch, useSelector } from "react-redux";
import cls from 'classnames';
import styles from './index.module.scss';

const MenuIcon = () => {

  const dispatch = useDispatch();

  const { isCollapsed } = useSelector(state => state)

  const handleCollapsed = () => {
    dispatch({
      type: 'changeCollapsed'
    })
    dispatch({
      type: 'dump',
      payload: {
        name: 'lmy111'
      }
    })
  }

  return (
    <span onClick={handleCollapsed}>
      {isCollapsed && <Iconfont className={cls(styles['menu-icon'], 'hvr-pulse')} type="icon-menu"/>}
    </span>
  )
}
export default MenuIcon;