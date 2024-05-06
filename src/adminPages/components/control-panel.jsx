import { useState } from "react";
import NewProduct from "./NewProduct";

const ControlPanel = () => {
  const [addNew, setAddNew] = useState(false);

  return (
    <div className="control-panel container  ">
      <div className="control-panel-nav"></div>

      <div className="control-panel-edit">
        <h1>
          დაამატე პროდუქცია
          <button onClick={() => setAddNew(!addNew)}>ADD</button>
        </h1>
      </div>

      {addNew && <NewProduct />}
    </div>
  );
};

export default ControlPanel;
