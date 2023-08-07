import { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm'; // Importa el componente LoginForm
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
  const router = useRouter();
  
  const handleLogin = () => {
    // Lógica de autenticación aquí (redirigir solo si es exitoso)
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
