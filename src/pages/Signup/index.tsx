import React from 'react';
import Form from 'antd/lib/form/Form';

import { SubmitBtn } from '@comp/Button';
import CenterLayout from '@comp/common/CenterLayout';
import { BasicInput } from '@comp/Input';
import PageTitle from '@comp/Text/PageTitle';

import './index.scss';

const SignupPage = (): JSX.Element => {
  return (
    <CenterLayout className="signup-page" innerClassName="signup-page__inner">
      <PageTitle text="파트너 회원가입" />
      <Form name="user">
        <div className="signup-page__form-container">
          <BasicInput
            type="text"
            label="이름"
            name="username"
            message="이름을 입력해주세요."
            placeholder="실명을 기입해주세요."
          />
          <BasicInput
            type="text"
            label="이메일"
            name="email"
            message="올바른 이메일을 입력해주세요."
            placeholder="abc@gmail.com"
          />
          <BasicInput
            type="text"
            label="휴대전화번호"
            name="phone"
            message="올바른 휴대전화번호를 입력해주세요."
            placeholder="010-****-****"
          />
          <BasicInput
            type="password"
            label="비밀번호"
            name="password"
            message="올바른 비밀번호를 입력해주세요."
            placeholder="비밀번호를 입력해주세요."
          />
          <BasicInput
            type="password"
            label="비밀번호 확인"
            name="passwordCheck"
            message="입력한 비밀번호와 다릅니다."
            placeholder="비밀번호를 다시 입력해주세요."
          />
          <SubmitBtn className="signup-page__submit-btn">회원가입</SubmitBtn>
        </div>
      </Form>
    </CenterLayout>
  );
};

export default SignupPage;
