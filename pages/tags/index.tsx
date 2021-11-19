import { FC } from 'react';
import { Tag } from 'antd';
import { useRouter } from 'next/router'
import { getTagList } from "@/utils/api";
import Iconfont from '@/components/iconfont';
import Title from "@/components/Title";
import styles from './index.module.scss';

interface TagProps {
  tagList: string[]
}

const tagColorList = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']

const randomNumber = (a: number, b: number) => {
  return Math.ceil(Math.random() * (b + 1 - a)) + a;
}

const Tags: FC<TagProps> = ({
  tagList
}) => {

  const router = useRouter();

  const handleClick = (tagName: string) => {
    router.push(`/list/${tagName}`)
  }

  return (
    <div>
      <Title title="标签" />
      <div className="flex justify-center align-center mt20">
        <Iconfont type="icon-tag" className={styles['icon-tag']} />
        <span style={{ fontSize: '25px' }}>
          标签
        </span>
      </div>
      <div style={{ textAlign: 'center' }} className="mt20">
        共 { tagList.length } 个标签
      </div>
      { tagList.map((item, index) => (
        <Tag
          key={index}
          className={`${styles.tag} hvr-float-shadow`} color={tagColorList[randomNumber(0, 10)]}
          onClick={handleClick.bind(null, item)}
        >
          { item }
        </Tag>
      )) }
    </div>
  )
}

export async function getServerSideProps() {
  // 可以按照 tag 进行分类筛选
  const tagList = await getTagList();
  return {
    props: {
      tagList,
    }
  }
}

export default Tags;
