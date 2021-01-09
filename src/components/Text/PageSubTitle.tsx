import React from 'react';
import cx from 'classnames';

import './PageSubTitle.scss';
import Paragraph from 'antd/lib/typography/Paragraph';

interface Props {
  text: string;
  className?: string;
}

const PageSubTitle = ({ className = '', text }: Props): JSX.Element => {
  return (
    <Paragraph strong={true} className={cx('page-sub-title', className)}>
      {text}
    </Paragraph>
  );
};

export default PageSubTitle;
