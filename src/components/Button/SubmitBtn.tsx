import { Button } from 'antd';
import cx from 'classnames';
import React, { ReactNode } from 'react';
import './SubmitBtn.scss';

interface Props {
  className?: string;
  children: ReactNode;
}

export const SubmitBtn = ({ className, children }: Props) => {
  return (
    <Button htmlType="submit" className={cx('submit-btn', className)}>
      {children}
    </Button>
  );
};
