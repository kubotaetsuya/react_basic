
const SignUpConfirmation = (props) => {
  return (
    <div>
      <p>姓:{props.first_name}</p>
      <p>名:{props.last_name}</p>
      <p>電話番号:{props.phone}</p>
      <p>Email:{props.email}</p>
      <p>パスワード:{props.password}</p>
      <p>確認用パスワード:{props.password_confirmation}</p>
    </div>
  )
};

export default SignUpConfirmation;
