import React from "react";
function Contact() {
    return (
<div className="container">
  <form>

   <input 
   type="text"
   label= "First Name"
   />
   <input
   type="text"
   label="Last Name"/>
   <input
   type="text"
   label ="email"/>
   <input
   type = "text"
   label= "message"/>

  </form>
</div>
    )
}
export default Contact;