import React, { CSSProperties } from 'react';
import { Form, Input, Button } from 'antd';
import cx from 'classnames';

import Style from './BasicInput.scss';

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
  wrapperStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  wrapperClass?: string;
  inputClass?: string;
}

export const BasicInput = ({
  type = InputType.Text,
  label,
  name,
  message,
  required = true,
  requiredStyle = false,
  wrapperStyle,
  inputStyle,
  wrapperClass,
  inputClass,
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
      label={<span className={Style.label}>{label}</span>}
      help={<p className={Style.message}>{message}</p>}
      validateStatus="error"
      style={{ marginBottom: '30px', ...wrapperStyle }}
      className={cx('basic-input', wrapperClass)}>
      <Component
        className={cx('basic-input__input', 'round', inputClass)}
        style={{ padding: '4px 20px', ...inputStyle }}
      />
    </Form.Item>
  );
};
