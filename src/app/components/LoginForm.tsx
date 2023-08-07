import { useState } from 'react';
import styles from '../styles/LoginPage.module.css';

// Define el tipo de la prop 'onLogin'
type LoginFormProps = {
  onLogin: () => void; // Cambia el tipo según lo que haga tu función onLogin
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación aquí (llamar a la función onLogin si es exitoso)
    onLogin();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Nombre de Usuario:</label>
        <input
          className={styles.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Contraseña:</label>
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
