import { useState } from 'react'
//import  IMaskInput  from "react-imask"
import InputMask from 'react-input-mask'
import logo_red_reduced from '../../components/img/logo_red_reduced.png'
import styles from './BuscadorCep.module.css'

function BuscadorCep(){  
   
  const [cep, setCep] = useState([]);
  // const [inputVazio, setInputVazio] = useState(true);
  
  // useEffect(() =>{
  //   function validaCampo(){
  //     if(inputCep.length >= 0){
  //       setInputVazio(false);
  //     }
  //   }
  //   validaCampo()
  // });

  function buscaCep(e){
    e.preventDefault();
    const inputCep = document.getElementById('search_cep').value;
    const url = `https://viacep.com.br/ws/${inputCep}/json/`
  
    fetch(url)
    .then(res => res.json())
    .then(data => {console.log(data) 
      setCep(data)})
    .catch(error => console.log("Ocorreu um erro: ", error));

  }
   

  return (
    <main className={styles.main}>
      <section className = {styles.pesquisa}>
        <div className={styles.main_logo}>
          <img src={logo_red_reduced} alt="Logo vermelha Busca CEP" />
          <h1>Busca CEP</h1>
          <p><small>Onde você encontra tudo sobre CEPs.</small></p>
        </div>
        <form className={styles.form_pesquisa} id="form_pesquisa" onSubmit={buscaCep}  >
          <InputMask mask='99999-999' className={styles.caixa_pesquisa} id='search_cep' type="text" name ="search_cep" required placeholder="Insira um CEP aqui."/>
          <button className={styles.botao_pesquisa} type="submit"  id='botao_pesquisa' name='botao_pesquisa' disabled={!cep}>Pesquisar</button>
        </form>
        <div>
        </div>
      </section>
      {cep.erro ?
        (  
          <span className={styles.mensagem_erro}>Parece que este CEP não é válido. Tente inserir um CEP válido.</span>
        )
        : 
        (
          <section className={styles.resultado_pesquisa}>
            <div className={styles.card_cep}>
              <h2>CEP: <b>{cep.cep}</b></h2>
              <p>Logradouro: <b>{cep.logradouro}</b></p>
              <p>Bairro: <b>{cep.bairro}</b></p>
              <p>Localidade: <b>{cep.localidade}</b></p>
              <p>UF: <b>{cep.uf}</b></p>
            </div>
          </section>
        ) 
      }
      
            
    </main>
  )
}

export default BuscadorCep