import React, {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark  } from '@fortawesome/free-solid-svg-icons'
import ricettaTest from '../../images/testRicetta.jpg'
import caricamento from '../../images/loader.gif'
import './Ricetta.css'
import { AppContext } from '../App/App';
import { Configuration, OpenAIApi } from 'openai';

export default function Ricetta() {
  /* const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration); */

  const [divCaricamento, setDivCaricamento] = useState (false);

  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const contextValue = useContext(AppContext);

  /* const handleSubmit = async () => {
    setDivCaricamento(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 50,
      });
      //console.log("response", result.data.choices[0].text);
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      //console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setDivCaricamento(false);
  }; */

  function callApi() {
    let data = '';
    fetch('https://www.themealdb.com/api/json/v1/1/random.php', { method: 'GET' })
      .then(data => data.json()) // Parsing the data into a JavaScript object
      .then(json => setApiResponse(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  }

  const ricettaTestTxt = async() => {
    setDivCaricamento(true);
    callApi();
    setDivCaricamento(false);
  }


  useEffect(() => {
    if(contextValue.modaleRicetta.aperturaRicetta){
      //setPrompt('crea una semplice ricetta (testo wrappato in tag p e se usi elenchi puntati usa il tag ul. Il titolo in un h1 e i sottotitoli come "ingredienti", "Istruzioni" ecc in h2 senza apertura di html, body ecc. Solo la parte del testo) senza commenti ne prima ne dopo (solo il testo della ricetta) con questi ingredienti: 🍎🥩🥦')
      //console.log(prompt);
      //handleSubmit();
      ricettaTestTxt();
    }
  }, [contextValue.modaleRicetta.aperturaRicetta])

/*   useEffect(() => {
    if(prompt){
      ricettaTestTxt();
    }
  }, [prompt]) */
  

  function chiudiRicetta(){
    contextValue.modaleRicetta.setAperturaRicetta(0);
    contextValue.statoBottone.setBottoneDisabilitato(false);
  }

  return (
    <div className={contextValue.modaleRicetta.aperturaRicetta ? divCaricamento ? 'ricetta visibile noscroll': 'ricetta visibile' : divCaricamento ? 'ricetta noscroll': 'ricetta'}>
        <div onClick={chiudiRicetta} className="chiusuraRicetta"><FontAwesomeIcon icon={faXmark} /></div>    
        <div className='contenutoRicetta'>
          <div className={divCaricamento ? 'caricamento visibile' : 'caricamento'}>
            <img src={caricamento}/>
            <h1>Caricamento
                <span className="dot-one"> .</span>
                <span className="dot-two"> .</span>
                <span className="dot-three"> .</span>
            </h1>
          </div>
          <div className='contenutoFotoRicetta'>
            <img src={ricettaTest}/>
          </div>
          <div className='contenutoTestoRicetta'>
            {apiResponse}
  {/*           <h1>Sauté di mele, bistecca e broccoli</h1>
            <h2>Ingredienti:</h2>
            <ul>
              <li><p>&#x1F34E; 1 mela verde</p></li>
              <li><p>&#x1F969; 200 grammi di bistecca di manzo</p></li>
              <li><p>&#x1F966; 1 mazzo di broccoli</p></li>
              <li><p>Sale e pepe q.b.</p></li>
              <li><p>2 cucchiai di olio d'oliva</p></li>
            </ul>
            <h2>Istruzioni:</h2>
            <ol>
              <li><p>Prepara gli ingredienti: lava e taglia a fette sottili la mela verde, affetta la bistecca di manzo a strisce sottili e separa i broccoli in cimette.</p></li>
              <li><p>In una padella grande, scalda un cucchiaio di olio d'oliva a fuoco medio-alto.</p></li>
              <li><p>Aggiungi le fette di mela e cuocile per circa 2-3 minuti, fino a quando iniziano a dorarsi leggermente. Rimuovi le fette di mela dalla padella e mettile da parte.</p></li>
              <li><p>Nella stessa padella, aggiungi l'altro cucchiaio di olio d'oliva e aggiungi la bistecca di manzo. Cuocila per circa 3-4 minuti, girandola occasionalmente, fino a quando è cotta al punto desiderato. Aggiusta di sale e pepe a piacere. Rimuovi la bistecca dalla padella e mettila da parte con le mele.</p></li>
              <li><p>Aggiungi le cimette di broccoli nella padella e cuocile per circa 5 minuti, finché non diventano tenere ma croccanti. Aggiusta di sale e pepe.</p></li>
              <li><p>Unisci le fette di mela e la bistecca di manzo alla padella con i broccoli. Mescola delicatamente per far amalgamare i sapori e cuoci per altri 1-2 minuti, finché tutti gli ingredienti sono ben riscaldati.</p></li>
              <li><p>Togli dal fuoco e servi il tuo sauté di mele, bistecca e broccoli caldo. Puoi accompagnarlo con riso o patate se desideri un piatto più sostanzioso.</p></li>
            </ol> */}
          </div>
        </div>
    </div>
  )
}
