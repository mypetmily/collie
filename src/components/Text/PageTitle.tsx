import React from 'react';
import cx from 'classnames';
import Title from 'antd/lib/typography/Title';

import './PageTitle.scss';

interface Props {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const PageTitle = ({ level = 2, className = '', text }: Props): JSX.Element => {
  return (
    <Title level={level} className={cx('page-title', className)}>
      {text}
    </Title>
  );
};

export default PageTitle;
