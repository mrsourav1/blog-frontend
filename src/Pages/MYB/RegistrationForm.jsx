import React, { useState } from 'react';
import "./Registration.css"
// import "../../css/style.css"

const Registration = () => {

  const submit = (event) => {
    event.preventDefault();
    console.log("submit",inputFields)
    // Your form submission logic goes here
  };


  const [inputFields, setInputFields] = useState({
    firstName:"",
    lastName:'',
    fatherName:'',
    phoneNumber:'',
    location:'',
    resume:'',
    gender:'',
    educationDetail:'',
    boardDetails:'',
    schoolDetails:'',
    degree:'',
    paymentID:'',
    reference:''
   

});
const handleInputs =(e)=>{
const {value,name} = e.target;
// console.log("value",value,name);
setInputFields({...inputFields,
    [name]:value})
} 

console.log("inputFields", inputFields);


// .................................................
console.log("inputFields.educationDetail" , inputFields.e )

// ..................................................
  return (

    <div className="container">
        <div className="row d-flex justify-content-center">
          <div>
            <h4 className='text-center mt-4'><strong>MYB Scholarship Registration</strong></h4>
          </div>
            <div className="col-lg-8 col-md-12 ">

            <div style={{backgroundColor:'', padding:'20px'}}>
      <div className='form-styling m-auto'>

   <form >
<div className='d-flex'>
  <input style={{marginRight:'10px'}} type="text" id="firstName" name="firstName" placeholder='First Name' value={inputFields.firstName} onChange={(e) => handleInputs(e)} />
  <input type="text" id="lastName" name="lastName" placeholder='Last Name' value={inputFields.lastName} onChange={(e) => handleInputs(e)} />
  </div>
  <input type="text" id="fatherName" name='fatherName' placeholder="Father's Name" value={inputFields.fatherName} onChange={(e) => handleInputs(e)} />
  <input type="tel" id="phoneNumber" name='phoneNumber' placeholder='Phone Number' value={inputFields.phoneNumber} onChange={(e) => handleInputs(e)} />


  <input type="text" id="location" name='location' placeholder='Enter Your Permanent Address' value={inputFields.location} onChange={(e) => handleInputs(e)} />
    <select id="gender" name='gender' value={inputFields.gender} onChange={(e) => handleInputs(e)} >
      <option value="">Select Your Gender Type</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
      </select>

  <div>
    <select id="education-detail-dropdown" name='educationDetail' value={inputFields.educationDetail} onChange={(e) => handleInputs(e)}  required >
      <option value="">Select Your Class</option>
      <option value="twelveth">12'th </option>
      <option value="eleventh">11'th </option>
      <option value="tenth">10'th </option>
      <option value="nineth">9'th</option>
      <option value="eight">8'th</option>
    </select>
  </div>


  {
    inputFields.educationDetail==="twelveth" || inputFields.educationDetail==="eleventh" ?
    (
    <>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="board-name" name='boardDetails' value={inputFields.boardDetails} placeholder='Board Name' required onChange={(e) => handleInputs(e)} />
        <input  style={{marginRight:'10px'}} type="text" id="school-name" name='schoolDetails' value={inputFields.schoolDetails} placeholder='School Name' required onChange={(e) => handleInputs(e)} />

        <input type='text' placeholder='Stream' id="degree" name='degree' value={inputFields.degree} onChange={(e) => handleInputs(e)}/>
      
      </div>
    
    </>
    ):
    (<>
      
    </>)
    }
    {inputFields.educationDetail==="tenth" || inputFields.educationDetail==="nineth" || inputFields.educationDetail==="eight" ? <>
       <div className='d-flex'>
       <input style={{ marginRight: '10px' }} type="text" id="board-name" name='boardyDetails' value={inputFields.boardDetails} placeholder='Board Name' required onChange={(e) => handleInputs(e)} />
        <input  style={{marginRight:'10px'}} type="text" id="school-name" name='schoolDetails' value={inputFields.schoolDetails} placeholder='School Name' required onChange={(e) => handleInputs(e)} />
         
      </div>
     
    </> : <></>}
    <input type="text" id="patmentID" name='reference' placeholder=" Reference If Any   example:'friend'" value={inputFields.reference} onChange={(e) => handleInputs(e)} />

  <input type="text" id="patmentID" name='paymentID' placeholder="Enter your payment I'D here" value={inputFields.paymentID} onChange={(e) => handleInputs(e)} />
    
  <div style={{ textAlign: "center" }}>
    <button className="p-2" type="submit" value="Submit" onClick={submit}>SignUp</button>
  </div>

</form>
</div>
  </div>


            </div>
            {/* form ends here */}
            <div className="col-lg-4 col-md-12 ">
                <div style={{width:"100%",height:"100%",background:""}}>
                    <img src="assets/image/QRCode.jpeg" className='QRCode' alt="QR Code" />
                </div>
            </div>

        </div>
    </div>

  
  )
};

export default Registration;