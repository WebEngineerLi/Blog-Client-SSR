import { FC } from 'react';
import Iconfont from '@/components/iconfont';
import { getBlogDetail } from '@/utils/api';
import { Card, Tag } from 'antd';
import dayjs from 'dayjs';
import cls from 'classnames';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import styles from './index.module.scss';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  breaks: true,
  smartLists: true,
  smartypants: true,
  highlight(code) {
    // console.log('hljs.highlightAuto(code).value:', hljs.highlightAuto(code).value);
    return hljs.highlightAuto(code).value;
  },
});

interface blogDetailProps {
  detail: {
    blogContent: string;
    blogDescription: string;
    blogId: string;
    blogStatus: string;
    blogTags: string;
    blogTitle: string;
    blogCreateTime: string;
  }
}


const BlogDetail: FC<blogDetailProps> = ({
  detail: {
    blogTitle,
    blogDescription,
    blogCreateTime,
    blogTags,
    blogContent
  }
}) => {
  return (
    <div className={styles.container}>
      <Card className={styles.wrapper}>
        <h1 className={cls(styles.title, 'hvr-wobble-bottom')}>
          {blogTitle}
        </h1>
        <div className={styles.datetime}>
          <Iconfont type="icon-rili" />
          <span style={{ paddingLeft: '10px' }}>{dayjs(blogCreateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
        </div>
        <div className={cls('mt20', styles.tag)}>
          {blogTags.split(',').map(item => (
            <Tag color="blue" key={item}>{item}</Tag>
          ))}
        </div>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: blogDescription }}>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{__html: marked(blogContent)}}
        />
      </Card>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { query: { id: blogId } } = context;
  const detail = await getBlogDetail({ blogId })
  return {
    props: {
      detail: detail[0]
    }
  }
}

export default BlogDetail;
