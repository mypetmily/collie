import React from 'react';

import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import { BasicInput } from '../../components/Input';

import './index.scss';

const formLayout = {};

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__inner">
        <Title level={2} className="login-page__tit">
          마이펫밀리 파트너 로그인
        </Title>
        <Paragraph strong={true} className="login-page__sub-tit">
          마이펫밀리의 회원이 되어보세요!
        </Paragraph>
        <div className="login-page__form-container">
          <Form name="user">
            <BasicInput label="이메일" name="email" message="이메일을 입력해주세요" />
            <BasicInput label="비밀번호" name="password" message="비밀번호를 입력해주세요" />
            <Link to="/forget_auth" className="login-page__forget-link">
              아이디 / 비밀번호를 잊어버렸어요!
            </Link>
            <BasicInput type="submit" label="로그인" wrapperStyle={{ clear: 'both' }} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
