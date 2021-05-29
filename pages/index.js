import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AuthService from './api/auth'

export default function Home() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const doLogin = async () => {
    await AuthService.login({ email, senha })
      .then(result => {
        alert("Bem-vindo(a) " + result.data.user.userName);
        const token = result.data.user.token;
        window.localStorage.setItem("do-task-token", token);
        router.push("/list")
      })
      .catch(error => {
        alert(error.data.error.message);
      });
  }

  return (
    <div className="background">
      <div className="card-login">
        <h2>Login</h2>
        <form className="form-login">
          <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
          <input type="password" value={senha} onChange={(e) => { setSenha(e.target.value) }} placeholder="Senha" />
          <button type="button" className="btn-entrar" onClick={doLogin} >Entrar</button>
        </form>
        <Link href="/register">Ainda não tem uma conta?</Link>
      </div>
    </div>
  )
}
