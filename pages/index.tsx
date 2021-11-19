import cls from 'classnames';
import MainContent from '@/components/main-content';
import { getBlogList } from '@/utils/api';
import { BlogContext } from '@/utils/context';
import Title from '@/components/Title';
import styles from '@/styles/Home.module.css'

interface HomeProps {
  blogList: any[]
}

export default function Home({
  blogList
}: HomeProps) {

  return (
    <div className={styles.container}>
      <Title title="首页" />
      <main className={cls('flex', styles.main)}>
        <BlogContext.Provider value={{ blogList }}>
          <MainContent />
        </BlogContext.Provider>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const blogList = await getBlogList();
  return {
    props: { blogList },
  }
}
