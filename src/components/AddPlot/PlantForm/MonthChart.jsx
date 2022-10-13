function MonthChart({plant}){
    return(
        <div className="sowing_chart">
            <div className="sowing_header">
                <h4 className="sowing_title">Growing Season</h4>
            </div>
                <div className="sowing_bars">
                    <div className="sowing_data per40">x</div>
                    <div className="sowing_data per60">x</div>
                    <div className="sowing_data per80">x</div>
                    <div className="sowing_data per100">x</div>
                    <div className="sowing_data per90">x</div>
                    <div className="sowing_data per70">x</div>
                    <div className="sowing_data per50">x</div>
                    <div className="sowing_data per30">x</div>
                </div>
                <div className="sowing_months">
                    <span className="sowing_month">Mar</span>
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