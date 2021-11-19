import React, { FC } from 'react';
import Head from "next/head";

interface TitleProps {
  title: string;
  content?: string;
}

const Title: FC<TitleProps> = ({
  title = '',
  content= '这是 Miang 的博客小站，里面有关于前端原生JS, React, Vue, Node 等技术性文章'
}) => {
  return (
    <Head>
      <title>{title} | 博客小站</title>
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Title;
