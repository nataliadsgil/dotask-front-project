import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import UserService from './api/user'

export default function Register() {

  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const doRegister = async () => {
    await UserService.register({ nome, email, senha })
      .then(result => {
        alert("Cadastro efetuado com sucesso!");
        router.push("/");
      })
      .catch(error => {
        alert(error.data.error.message);
      });
  }

  return (
    <div className="background">
      <div className="card-login">
        <h2>Cadastro</h2>
        <form className="form-login">
          <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} placeholder="Nome Completo" />
          <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
          <input type="password" value={senha} onChange={(e) => { setSenha(e.target.value) }} placeholder="Senha" />
          <button type="button" className="btn-entrar" onClick={doRegister} >Registrar</button>
        </form>
        <Link href="/">Já tem uma conta? Faça login!</Link>
      </div>
    </div>
  )
}
