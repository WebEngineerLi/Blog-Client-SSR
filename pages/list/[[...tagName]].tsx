import { FC } from 'react';
import BlogList from '@/components/blog-list';
import { getBlogList } from '@/utils/api';
import styles from './index.module.scss';
import { BlogContext } from '@/utils/context';
import Title from '@/components/Title';


interface ListProps {
  blogList: any[]
}

const List: FC<ListProps> = ({
  blogList
}) => {
  return (
    <div className={styles.wrapper}>
      <Title title="列表" />
      <BlogContext.Provider value={{ blogList }}>
        <BlogList />
      </BlogContext.Provider>
   </div>
  )
}

export async function getServerSideProps(context: any) {
  const { tagName } = context.params;
  // 可以按照 tagName 进行分类筛选
  const params = {
    blogTag: ''
  };
  if (tagName) {
    [params.blogTag] = tagName;
  }
  const blogList = await getBlogList(params);
  return {
    props: {
      blogList,
    }
  }
}

export default List;
