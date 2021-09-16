import React, { useContext } from 'react';
import styles from './index.module.scss';
import { BlogContext } from '@/utils/context';
import Link from 'next/link'
import cls from 'classnames';
import { Card, Button } from 'antd';
import dayjs from 'dayjs'
import Iconfont from '@/components/iconfont';

function BlogList() {
  const { blogList } = useContext(BlogContext)
  return (
    <div className={styles.wrapper}>
      {
        blogList.map(item => {
          return (
            <Card key={item.blogId} className={styles.item}>
              <Link href={`/blog/${item.blogId}`} passHref>
                <h1 className={cls(styles.title, 'hvr-buzz')}>{item.blogTitle}</h1>
              </Link>
              <div className={cls(styles.datetime, 'flex', 'align-center')}>
                <Iconfont type="icon-rili" />
                <span style={{ paddingLeft: '10px' }}>{dayjs(item.blogCreateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
              </div>
              <div className={styles.description}>
                {item.blogDescription}
              </div>
              <Link href={`/blog/${item.blogId}`} passHref>
                <Button type="primary" className={cls('mt20', 'hvr-ripple-out')}>
                  更多
                </Button>
              </Link>
            </Card>
          )
        })
      }
    </div>
  )
}

export default BlogList;
