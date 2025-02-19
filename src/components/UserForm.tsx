import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface UserData {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isDirty, setIsDirty] = useState<boolean>(false);

  // Fade-in animation with a duration of 2 seconds
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  // Casting animated.div to any to bypass TypeScript children error
  const AnimatedDiv = animated.div as any;

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value);
    setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData: UserData = {
      id: Date.now().toString(),
      name,
      address,
      email,
      phone,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('User data saved successfully!');

    setName('');
    setAddress('');
    setEmail('');
    setPhone('');
    setIsDirty(false);
  };

  return (
    <AnimatedDiv style={fadeIn}>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
        <h2>User Data Form</h2>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleChange(setName)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={handleChange(setAddress)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleChange(setEmail)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={handleChange(setPhone)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px' }}>
          Submit
        </button>
      </form>
    </AnimatedDiv>
  );
};

export default UserForm;
