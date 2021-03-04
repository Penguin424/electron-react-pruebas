const { dialog } = window.require("@electron/remote");

const App = () => {
  const handleClick = () => {
    dialog.showOpenDialog({
      properties: ["openDirectory", "openFile", "multiSelections"],
    });
  };
  return (
    <div>
      <h1>Hola, Mundo</h1>
      <button onClick={() => handleClick()}>al fin</button>
    </div>
  );
};

export default App;
