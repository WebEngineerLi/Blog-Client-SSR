import React, { FC } from 'react';
import { Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import cls from 'classnames';
import { useRouter } from 'next/router'
import Iconfont from '@/components/iconfont';
import styles from './index.module.scss';

interface LeftMenuProps {
  isShowClose?: boolean
}

const icons = [{
  icon: 'icon-home',
  link: '/',
}, {
  icon: 'icon-tag',
  link: '/tags',
}, {
  icon: 'icon-exe-article-primary',
  link: '/list',
}]


const LeftMenu: FC<LeftMenuProps> = ({
  isShowClose = true
}) => {

  const dispatch = useDispatch();
  const router = useRouter()
  const { isCollapsed } = useSelector((state) => state)
  const handleCollapse = () => {
    dispatch({
      type: 'changeCollapsed',
    })
  }

  return (
    <div className={cls(styles.wrapper, {
      [styles['is-collapsed']]: isCollapsed,
      [styles['is-expand']]: !isCollapsed || !isShowClose
    })}>
      {isShowClose && <span
        onClick={handleCollapse}
      >
        <Iconfont type="icon-close" className={cls(styles.close, 'hvr-pulse', 'pointer')}/>
      </span>}
      <div
        onClick={() => router.push('/cv')}
        className={cls('flex', 'justify-center', styles['avatar-wrapper'])}
      >
        <Avatar  className={'hvr-pulse'} size={110} src="https://cdn.mingyangli.com/xiaoqing_avatar.jpg" />
      </div>
      <h3 className={cls(styles.name, 'mt20')}>LMY 的博客小站</h3>
      <h4 className={styles.describe}>拥有有趣灵魂的人</h4>
      <div className={cls(styles['icon-wrapper'], 'flex', 'justify-between')}>
        {icons.map(({ icon , link}) => (
          <span key={icon} onClick={() => router.push(link) }>
             <Iconfont type={icon} className='hvr-pulse pointer' />
          </span>
        ))}
      </div>
      <div className={styles.placement}>
        我承认这里有点空，我还没想好要放什么东西，先占个位置吧😅
      </div>
    </div>
  )
}

export default LeftMenu;
