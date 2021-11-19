import { FC } from 'react';
import styles from './index.module.scss'
import Section from '@/components/section';
import { Descriptions, Spin } from 'antd';
import { getCvList } from '@/utils/api';
import Title from "@/components/Title";
interface cvProps {
  cvList: {
    github: string[],
    personalInformation: string[],
    personalSkills: string[],
    technologyStack: string[],
  }
}

const CV: FC<cvProps> = ({
  cvList
}) => {

  const renderList = (list: string[]) => {
    return list.map((item) => (
      <Descriptions.Item key={item}>
        <span dangerouslySetInnerHTML={{ __html: item }} />
      </Descriptions.Item>
    ));
  }

  const { personalInformation, technologyStack, personalSkills, github } = cvList;

  return (
    <Spin spinning={false}>
      <Title title="简介" />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Section title="个人信息">
            <Descriptions column={2}>
              {renderList(personalInformation)}
            </Descriptions>
          </Section>
          <Section title="主要技术栈">
            <Descriptions column={1}>
              {renderList(technologyStack)}
            </Descriptions>
          </Section>
          <Section title="个人技能">
            <Descriptions column={1}>
              {renderList(personalSkills)}
            </Descriptions>
          </Section>
          <Section title="开源项目">
            <Descriptions column={1}>
              {renderList(github)}
            </Descriptions>
          </Section>
        </div>
      </div>
    </Spin>
  )
}
export async function getServerSideProps() {
  const cvList = await getCvList();
  return {
    props: { cvList },
  }
}

export default CV;
