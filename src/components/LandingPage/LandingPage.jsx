import { useHistory } from 'react-router-dom';

// CUSTOM COMPONENTS
import RegisterForm from './RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>Welcome</h2>
      <RegisterForm />
      <h4>Already a Member?</h4>
      <button className="btn btn_sizeSm" onClick={onLogin}>
        Login
      </button>
    </div>
  );
}

export default LandingPage;
