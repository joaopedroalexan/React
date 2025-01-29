function App() {
  return (
    <div>
      <h1>Botões</h1>
      <ButtonCreate/>
      <ButtonDelete/>
    </div>
  );
}
function ButtonCreate() {
  function click() {
    alert("Você criou um item");
  }

  return (
    <button
      style={{
        margin:"10px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "green",
        color: "white",
        cursor: "pointer",
      }}
      onClick={() => click()}
    >
      Criar
    </button>
  );
}
function ButtonDelete() {
  function click() {
    alert("Você Deletou um item");
  }
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "Red",
        color: "white",
        cursor: "pointer",
      }}
      onClick={() => click()}
    >
      Delete
    </button>
  );
}

export default App;
