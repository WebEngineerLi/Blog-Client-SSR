import React, { FC } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

interface IconfontProps {
  type: string,
  className?: string
}

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1849845_81jbzphv8x2.js',
});

const ExpIconFont: FC<IconfontProps> = ({
  type,
  className = ''
}) => (
  <IconFont type={type} className={className} />
)

export default ExpIconFont;