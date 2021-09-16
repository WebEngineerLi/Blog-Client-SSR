import Head from 'next/head'
import cls from 'classnames';
import MainContent from '@/components/main-content';
import { getBlogList } from '@/utils/api';
import { BlogContext } from '@/utils/context';
import styles from '@/styles/Home.module.css'

interface HomeProps {
  blogList: any[]
}

export default function Home({
  blogList
}: HomeProps) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Miang 博客小站</title>
        <meta name="description" content="这是 Miang 的博客小站，里面有关于前端原生JS, React, Vue, Node 等技术性文章" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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