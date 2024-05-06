import { useState } from "react";
import NewProduct from "./NewProduct";

const ControlPanel = () => {
  const [addNew, setAddNew] = useState(false);

  return (
    <div className="control-panel ">
      <div className="control-panel-nav">

        <h1>პროდუქცია</h1>
        <h1>დამატება </h1>
        <h1>მომხმარებლები</h1>

      </div>

      <div className="control-panel-edit">
        <h1>
          დაამატე პროდუქცია
          <button onClick={() => setAddNew(!addNew)}>დამატება</button>
        </h1>

        <h1>
          ჩვენ შესახებ
          <button onClick={() => setAddNew(!addNew)}>შეცვლა</button>
        </h1>

        <h1>
          კონტაქტი
          <button onClick={() => setAddNew(!addNew)}>შეცვლა</button>
        </h1>

  
      </div>

      {addNew && <NewProduct />}
      {addNew && <div className="overlay" onClick={() => setAddNew(!addNew)}></div>}
    </div>
  );
};

export default ControlPanel;
