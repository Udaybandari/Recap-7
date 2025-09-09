import React from "react";
import ToolTip from ".";

const Tooltiptest = () => {
  return (
    <div>
        <h1>ToolTipTest</h1>
        <ToolTip delay={500} content={"Tooltip Content"} children={<p>Hover Me</p>}/>
    </div>
  )
};

export default Tooltiptest;
