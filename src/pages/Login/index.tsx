import React from 'react';

import { Form } from 'antd';
import { Link } from 'react-router-dom';

import CenterLayout from '@comp/common/CenterLayout';
import { BasicInput } from '@comp/Input';
import { SubmitBtn } from '@comp/Button';

import './index.scss';
import PageTitle from '@comp/Text/PageTitle';
import PageSubTitle from '@comp/Text/PageSubTitle';

const LoginPage = (): JSX.Element => {
  return (
    <CenterLayout className="login-page" innerClassName="login-page__inner">
      <PageTitle text="마이팻밀리 파트너 로그인" />
      <PageSubTitle className="login-page__sub-tit" text="마이펫밀리의 회원이 되어보세요!" />
      <Form name="user">
        <div className="login-page__form-container">
          <BasicInput type="text" label="이메일" name="email" message="이메일을 입력해주세요" />
          <BasicInput type="password" label="비밀번호" name="password" message="비밀번호를 입력해주세요" />
          <Link to="/forget_auth" className="login-page__forget-link">
            아이디 / 비밀번호를 잊어버렸어요!
          </Link>
          <SubmitBtn className="login-page__submit-btn">로그인</SubmitBtn>
        </div>
      </Form>
    </CenterLayout>
  );
};

export default LoginPage;
