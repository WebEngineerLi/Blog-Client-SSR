import { FC } from 'react';
import BlogList from '@/components/blog-list';
import { getBlogList } from '@/utils/api';
import styles from './index.module.scss';
import { BlogContext } from '@/utils/context';

interface ListProps {
  blogList: any[]
}

const List: FC<ListProps> = ({
  blogList
}) => {
  return (
    <div className={styles.wrapper}>
      <BlogContext.Provider value={{ blogList }}>
        <BlogList />
      </BlogContext.Provider>
   </div>
  )
}

export async function getServerSideProps() {
  // 可以按照 tagId 进行分类筛选
  const blogList = await getBlogList();
  return {
    props: {
      blogList,
    }
  }
}

export default List;