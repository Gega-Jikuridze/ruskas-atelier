

const ControlPanel = () => {

const controlPanelNav = ["მთავარი" , "პროდუქცია", "კატეგორია", "ჩვენ შესახებ", "მომხმარებელი"]
const controlPanelEdit = ["დაამატე პრპდუქცია", "დაამატე კატეგორია", "დაამატე ბანერი", "ჩვენ შესახებ"]

    return <div className="control-panel container  ">

        <div className="control-panel-nav">
        {controlPanelNav.map((el, index) => (
            <h1 key={index}>{el}</h1>
        ))}
        </div>

        <div className="control-panel-edit">
        {controlPanelEdit.map((el, index) => (
            <h1 key={index}>{el} <button>დამატება</button></h1>
        ))}
        </div>
    </div>
}

export default ControlPanel