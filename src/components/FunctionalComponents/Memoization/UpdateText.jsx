
import { memo } from "react";
const UpdateNumber2=({value})=>{
    return (
        <div>
            <h1>Update number2</h1>
            <h2> the value {value}</h2>
        </div>
    );
}
export default memo(UpdateNumber2);