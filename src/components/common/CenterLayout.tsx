import React, { ReactNode } from 'react';
import cx from 'classnames';

import './CenterLayout.scss';

interface Props {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

const CenterLayout = ({ className = '', innerClassName = '', children }: Props): JSX.Element => {
  return (
    <div className={cx('center-layout', className)}>
      <div className={cx('center-layout__inner', innerClassName)}>{children}</div>
    </div>
  );
};

export default CenterLayout;
