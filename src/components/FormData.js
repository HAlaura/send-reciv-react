import { useState } from "react";

// function FormData(){
//     // const [formData,setFromData]=useState({goal:"",by:""})
//    // const [formData,setFromData]=useState(null);
//     const [formData,setFromData]=useState({});
//     const [goal,setGoal] =useState("");
//     const [by,setBy]=useState("");

//     const handleGoalChange=(e)=>{
//         setGoal(e.target.value);
//     };
//     const handleByChange=(e)=>{
//         setBy(e.target.value);
//     };
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         setFromData({goal:goal,by:by});
//     };



// return(
//     <div>
//     <form className="contener" onSubmit={handleSubmit}>
//         <input type="text"
//         placeholder="Gole"
//         value={goal}
//         onChange={handleGoalChange}
//         />
//         <input type="text"
//         placeholder="By..."
//         value={by}
//         onChange={handleByChange}
//         />

//         <button type="submit">submit</button>
//         <div>
//             {Object.keys(formData).length
//             ?`${formData.goal}By${formData.by}`
//             :""}
//             </div>
//     </form>
//     </div>
// );
//}

// function FormData(){
        
//         const [formData,setFromData]=useState({goal:"",by:""});
        
//         const handleChange=(e)=>{
//             setFromData({...formData,[e.target.name]:e.target.value});
//         };
        
//         const handleSubmit=(e)=>{
//             e.preventDefault();
//             setFromData({goal:"",by:""});
//         };
    
    
    
//     return(
//         <div>
//         <form className="contener" onSubmit={handleSubmit}>
//             <input type="text"
//             placeholder="Gole"
//             name="goal"
//             value={formData.goal}
//             onChange={handleChange}
//             />
//             <input type="text"
//             placeholder="By..."
//             name="by"
//             value={formData.by}
//             onChange={handleChange}
//             />
    
//             <button type="submit">submit</button>
//             <div>
//                 {Object.keys(formData).length
//                 ?`${formData.goal}By${formData.by}`
//                 :""}
//                 </div>
//         </form>
//         </div>
//     );
// }
// export default FormData;


function FormData() {
    const [formData, setFormData] = useState({ goal: "", by: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you could handle the form data submission (e.g., send it to an API)
        console.log('Submitted Data:', formData);
        setFormData({ goal: "", by: "" }); // Clear the form after submission
    };

    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="By..."
                    name="by"
                    value={formData.by}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
                <div>
                    {formData.goal && formData.by // Check if both fields are filled
                        ? `${formData.goal} by ${formData.by}` // Improved formatting
                        : ""}
                </div>
            </form>
        </div>
    );
}

export default FormData;
