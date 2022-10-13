import MonthChart from "./MonthChart";
//MUI

function PlantItem({plant}){

    return(
        <li className="available_plant">
            <div className="a_plant_header">
                <span className="a_plant_name">{plant.name}</span>
                <button className="icon_button edit">✎</button>
            </div>
            <div className="a_plant_body">
                <div className="a_plant_image_section">
                    <img src="https://img.freepik.com/premium-vector/bright-red-tomatoes-ingredients-healthy-cooking_68708-2007.jpg?w=2000"
                        className="a_plant_image"/>
                </div>
                <div className="a_plant_info">
                    <div className="a_plant_details">
                        <p className="a_plant_subname">{plant.sunlight}</p>
                        <p className="a_plant_fact">Here's some information about the plant</p>
                        <p className="a_plant_fact">Here's some information about the plant</p>
                        <p className="a_plant_fact">Here's some information about the plant</p>
                        <p className="a_plant_fact">Here's some information about the plant</p>
                    </div>
                    <MonthChart plant={plant}/>
                </div>
            </div>
        </li>
    )
}

export default PlantItem;
