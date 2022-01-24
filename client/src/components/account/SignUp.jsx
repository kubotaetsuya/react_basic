import SignUpConfirmation from "./SignUpConfirmation";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  //formDataの状態管理
  const [formData, setFormData] = useState({
    first_name:            "",
    last_name:             "",
    email:                 "",
    phone:                 "",
    password:              "",
    password_confirmation: "",
  }
);
  // 確認モーダルの状態管理
  const [flgConfirmation, setFlgConfirmation] = useState(false);

  // Headers アカウント登録
  const headers = {
    'Content-Type': "application/json",
    'Access-Control-Allow-Origin': "http://localhost:3000",
  }

  // ApiEndPoint アカウント登録
  const url = "http://localhost:3001/api/v1/auth";

  // アカウント登録用データ
  const postData = {
    first_name:            formData.first_name,
    last_name:             formData.last_name,
    email:                 formData.email,
    phone:                 formData.phone,
    password:              formData.password,
    password_confirmation: formData.password_confirmation,
  }

  // formData Changeイベント
  const changeFirstName            = e => setFormData({...formData, first_name: e.target.value});
  const changeLastName             = e => setFormData({...formData, last_name: e.target.value});
  const changeEmail                = e => setFormData({...formData, email: e.target.value});
  const changePhone                = e => setFormData({...formData, phone: e.target.value});
  const changePassword             = e => setFormData({...formData, password: e.target.value});
  const changePasswordConfirmation = e => setFormData({...formData, password_confirmation: e.target.value});

  // 確認モーダルのトグルイベント
  const toggleFlgConfirmation = e => setFlgConfirmation(!flgConfirmation);

  // アカウント登録イベント
  const accuntRegistration = () => {
    axios.post(url, postData, headers)
    .then(res => {
      alert("登録が成功しました")
      window.location.href("http://ocalhost:3001/sign-up");
    })
    .catch(e => {
      alert("登録に失敗しました")
      setFlgConfirmation(false)
    })
  }

  const register = () => {
    accuntRegistration();
  }

  return (
    <form>
      <label htmlFor="first_name">姓 :</label>
      <input type="text" name="first_name" value={formData.first_name} onChange={changeFirstName} /><br/>

      <label htmlFor="last_name">名 :</label>
      <input type="text" name="last_name" value={formData.last_name} onChange={changeLastName} /><br/>

      <label htmlFor="email">メールアドレス :</label>
      <input type="text" name="email" value={formData.email} onChange={changeEmail} /><br/>

      <label htmlFor="phone">電話番号 :</label>
      <input type="text" name="phone" value={formData.phone} onChange={changePhone} /><br/>

      <label htmlFor="password">パスワード :</label>
      <input type="text" name="password" value={formData.password} onChange={changePassword} /><br/>

      <label htmlFor="password_confirmation">確認用パスワード :</label>
      <input type="text" name="password_confirmation" value={formData.password_confirmation} onChange={changePasswordConfirmation} /><br/>

      {!flgConfirmation && <button type="button" onClick={toggleFlgConfirmation}>確認</button>}
      {flgConfirmation  && <button type="button" onClick={toggleFlgConfirmation}>修正</button>}
      {flgConfirmation  && <button type="button" onClick={register}>登録</button>}
    </form>
  )
};

export default SignUp;
