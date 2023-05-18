import { useState } from 'react';
import LoginForm, { IUser } from './components/Form';

export default function Login() {
  const [register, setRegister] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    email: '',
    password: '',
    token: '',
  });

  return (
    <div className="bg-yellow flex min-h-screen w-full items-center justify-center p-6">
      <LoginForm
        register={register}
        setRegister={setRegister}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}
