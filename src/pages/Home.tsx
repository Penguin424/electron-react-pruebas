// eslint-disable-next-line
import electron from "electron";
import { useState } from "react";
const { dialog } = window.require("electron").remote;
const fs = window.require("fs");

const Home = () => {
  const [imagenes, setImagenes] = useState<string[] | undefined>([]);

  const handleClick = () => {
    let imgs: string[] | undefined = dialog.showOpenDialogSync({
      properties: ["openFile", "multiSelections"],
    });
    setImagenes(
      imgs?.map((a) => {
        return fs.readFileSync(a).toString("base64");
      })
    );
  };

  return (
    <div className="container">
      <h1 className="text-center">Selector de imagenes</h1>
      <button className="btn btn-primary" onClick={() => handleClick()}>
        al fin
      </button>

      <div className="row mt-5">
        {imagenes &&
          imagenes?.length > 0 &&
          imagenes.map((a) => {
            return (
              // <div key={a} className="col-md-3 mb-5 ml-2">
              <div className="card ml-4 mb-5" style={{ width: "18rem" }}>
                <img
                  src={"data:image/png;base64," + a}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              // </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
