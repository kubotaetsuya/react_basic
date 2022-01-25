import SignUpConfirmation from "./SignUpConfirmation";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const SignUp = () => {
  // 確認モーダルの状態管理
  const [flgConfirmation, setFlgConfirmation] = useState(false);

  // Headers アカウント登録
  const headers = {
    'Content-Type': "application/json",
    'Access-Control-Allow-Origin': "http://localhost:3000",
  }

  // ApiEndPoint アカウント登録
  const url = "http://localhost:3001/api/v1/auth";

  // React Hook Form オブジェクト
  const {register, handleSubmit, watch, formState: { errors }, getValues, reset} = useForm();

  // 各インプットの状態管理
  const watchData = watch({
    first_name:            "first_name",
    last_name:             "last_name",
    email:                 "email",
    phone:                 "phone",
    password:              "password",
    password_confirmation: "password_confirmation",
  });

  // 正規表現
  const checkEmail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
  const checkPassword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{5,100}$/;

  // 確認モーダルのトグルイベント
  const toggleFlgConfirmation = e => setFlgConfirmation(!flgConfirmation);

  // アカウント登録イベント
  const accountRegistration = () => {
    axios.post(url, watchData, headers)
    .then(response => {
      alert("登録が成功しました");
      reset();
      window.location.href = "http://localhost:3000/sign-up";
    })
    .catch(error => {
      alert("登録に失敗しました");
      setFlgConfirmation(false)
    })
  }

  const accountRegister = () => {
    accountRegistration();
  }

  return (
    <form onSubmit={handleSubmit(accountRegister)}>
      <label htmlFor="first_name">姓 :</label>
      <input
        type="text"
        name="first_name"
        {...register("first_name", {required: "姓は必須です。"})}
      />
      {errors.first_name && <span>{errors.first_name.message}</span>}<br/>

      <label htmlFor="last_name">名 :</label>
      <input
        type="text"
        name="last_name"
        {...register("last_name", {required: "名は必須です。"})}
      />
        {errors.last_name && <span>{errors.last_name.message}</span>}<br/>

      <label htmlFor="email">メールアドレス :</label>
      <input
        type="text"
        name="email"
        {...register("email", {
            required: "メールアドレスは必須です。正しく入力してください。",
            pattern: {
              value: checkEmail,
              message: "メールアドレスには@が必須です。",
            }
          }
        )}
      />
      {errors.email && <span>{errors.email.message}</span>}<br/>

      <label htmlFor="phone">電話番号 :</label>
      <input
        type="text"
        name="phone"
        {...register("phone", {required: "電話番号は必須です。"})}
      />
      {errors.phone && <span>{errors.email.message}</span>}<br/>

      <label htmlFor="password">パスワード :</label>
      <input
        type="text"
        name="password"
        {...register("password", {
            required: "パスワードは必須です",
            pattern: {
              value: checkPassword,
              message: "半角英数字&大文字と小文字を含めてください。"
            }
          }
        )}
      />
      {errors.password && <span>{errors.password.message}</span>}<br/>

      <label htmlFor="password_confirmation">確認用パスワード :</label>
      <input
      type="text"
      name="password_confirmation"
      {...register("password_confirmation", {
        required: "確認用パスワードは必須です。",
        validate: value => value === getValues('password') || <span>パスワードが一致しません。</span>
      })}
      />
      {errors.password_confirmation && <span>{errors.password_confirmation.message}</span>}<br/>

      {!flgConfirmation && <button type="button" onClick={toggleFlgConfirmation}>確認</button>}
      {flgConfirmation  && <button type="button" onClick={toggleFlgConfirmation}>修正</button>}
      {flgConfirmation  && <button type="submit">登録</button>}
      {flgConfirmation  &&
        <div>
          <SignUpConfirmation
            first_name            = {watchData.first_name}
            last_name             = {watchData.last_name}
            email                 = {watchData.email}
            phone                 = {watchData.phone}
            password              = {watchData.password}
            password_confirmation = {watchData.password_confirmation}
          />
        </div>
      }
    </form>
  )
};

export default SignUp;