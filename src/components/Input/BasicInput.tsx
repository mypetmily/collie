import React from 'react';
import { Form, Input } from 'antd';
import cx from 'classnames';

import './BasicInput.scss';

const InputType = {
  Text: 'text',
  Password: 'password',
} as const;

interface Props {
  name?: string;
  type?: typeof InputType[keyof typeof InputType];
  label?: string;
  message?: string;
  required?: boolean;
  requiredStyle?: boolean;
}

export const BasicInput = ({
  type = InputType.Text,
  label,
  name,
  message,
  required = true,
  requiredStyle = false,
}: Props): JSX.Element => {
  let Component;

  switch (type) {
    case InputType.Text: {
      Component = Input;
      break;
    }
    case InputType.Password: {
      Component = Input.Password;
      break;
    }
    default: {
      Component = Input;
    }
  }
  return (
    <Form.Item
      colon={false}
      labelAlign="left"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      name={name}
      required={requiredStyle}
      rules={[{ required, message }]}
      label={<span className="basic-input__label">{label}</span>}
      help={<p className="basic-input__message">{message}</p>}
      validateStatus="error"
      className={cx('basic-input')}>
      <Component className={cx('basic-input__input', 'round')} />
    </Form.Item>
  );
};
