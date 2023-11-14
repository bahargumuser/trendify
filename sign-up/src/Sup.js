import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const history = useHistory();

  const handleSignUp = () => {

    if (termsChecked) {
      console.log('Başarıyla kayıt oldunuz!');
    } else {
      console.log('Lütfen hüküm ve koşulları kabul edin.');
    }
    history.push("/login");
  };

  return (
    <section className="bg-[#5234B2] flex items-center justify-center h-screen">
    <div className="max-w-md mx-auto mt-10 w-1/2 p-4 bg-pink rounded-md shadow-md bg-[#ffff] ">
      <h2 className="font-custom-style text-4xl text-[#250E6E]">Create an account</h2>
      <label className="block mb-4">
        Business E-mail:
        <input
          type="email"
          className="form-input mt-1 block w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> 
      </label>
      <label className="block mb-4">
        Password:
        <input
          type="password"
          className="form-input mt-1 block w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        Re-enter Password:
        <input
          type="password"
          className="form-input mt-1 block w-full"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          className="form-checkbox"
          checked={termsChecked}
          onChange={() => setTermsChecked(!termsChecked)}
        />
        <span className="ml-2">I accept terms of service & Privacy policy.</span>
      </label>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Click here to login</Link>
      </p>
    </div>
    <div className='mt-10 w-1/2 p-4'>
      <h1>Prowth</h1>
      <p>Empowering Growth No Code Required!</p>
    </div>
    </section>
  );
};

export default SignUp;
