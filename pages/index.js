
export default function Home() {
  function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    if (peso && altura) {
      const alturaM = altura / 100;
      const imc = (peso / (alturaM * alturaM)).toFixed(2);
      document.getElementById("resultado").innerText = "IMC: " + imc;
    }
  }

  return (
    <div style={{
      fontFamily: "Arial",
      backgroundColor: "#f3f4f6",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{textAlign:"center"}}>Shahin Personal Trainer</h1>
        <p style={{textAlign:"center", color:"gray"}}>
          Avaliação Física Profissional<br/>
          CREF 033699-G/SP | Tel: 11 99546-2603
        </p>

        <hr/>

        <h3>Dados do Aluno</h3>

        <input placeholder="Nome do aluno" style={inputStyle} /><br/><br/>
        <input placeholder="Idade" type="number" style={inputStyle} /><br/><br/>
        <input placeholder="Telefone" style={inputStyle} /><br/><br/>
        <input id="peso" placeholder="Peso (kg)" type="number" style={inputStyle} /><br/><br/>
        <input id="altura" placeholder="Altura (cm)" type="number" style={inputStyle} /><br/><br/>

        <button onClick={calcularIMC} style={buttonStyle}>
          Calcular IMC
        </button>

        <h3 id="resultado" style={{marginTop:"20px"}}></h3>

        <textarea placeholder="Observações e recomendações"
          style={{...inputStyle, height:"80px"}} />

        <div style={{
          marginTop:"20px",
          fontSize:"12px",
          textAlign:"center",
          color:"gray"
        }}>
          © 2026 Shahin Personal Trainer
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "black",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};
