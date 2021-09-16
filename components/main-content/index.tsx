import React, { useCallback, useRef } from 'react';
import Cover from '@/components/cover';
import BlogList from '@/components/blog-list';
import styles from './index.module.scss';

const MainContent = () => {

  const wrapperRef = useRef(null);

  const handleOpen = useCallback(() => {
    let height = 0;
    // (wrapperRef.current as any).scrollTop = window.innerHeight
    const interval = setInterval(() => {
      height += 15;
      if (height >= window.innerHeight) {
        height = window.innerHeight;
        (wrapperRef.current as any).scrollTop = height;
        clearInterval(interval)
        return;
      }
      (wrapperRef.current as any).scrollTop = height;
    }, 1) 
  }, [])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Cover onOpen={handleOpen} />
      <BlogList />
    </div>
  )
}


export default MainContent;