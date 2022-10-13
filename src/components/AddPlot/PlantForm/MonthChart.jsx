function MonthChart({plant}){
    return(
        <div className="sowing_chart">
            <div className="sowing_header">
                <h4 className="sowing_title">Growing Season</h4>
            </div>
                <div className="sowing_bars">
                    <div className={`sowing_data per${plant.march}`}>x</div>
                    <div className={`sowing_data per${plant.april}`}>x</div>
                    <div className={`sowing_data per${plant.may}`}>x</div>
                    <div className={`sowing_data per${plant.june}`}>x</div>
                    <div className={`sowing_data per${plant.july}`}>x</div>
                    <div className={`sowing_data per${plant.august}`}>x</div>
                    <div className={`sowing_data per${plant.september}`}>x</div>
                    <div className={`sowing_data per${plant.october}`}>x</div>
                </div>
                <div className="sowing_months">
                    <span className="sowing_month">March</span>
                    <span className="sowing_month">April</span>
                    <span className="sowing_month">May</span>
                    <span className="sowing_month">June</span>
                    <span className="sowing_month">July</span>
                    <span className="sowing_month">Aug</span>
                    <span className="sowing_month">Sept</span>
                    <span className="sowing_month">Oct</span>
            </div>
        </div>
    )
}

export default MonthChart;