import React from 'react';

const SkillSet =()=>{

    const Technical={
        Language:['Java','.Net','C','php','Javascript','Python'],
        Version_Control:['GitBash','Source-Tree'],
        Database:['MongoDB','SQL','MySQL','Data Normalization','Entity Relation Design and Modelling'],
        Web_Development:['JavaScript','NodeJs','JQuery','JSF server Technology','J2EE','React','Bootstrap','Java'],
        IDE:['Eclipse','VS-Code','Visual Studio','Android Studio','NetBeans'],
        Project_Management:['Scrum','Waterfall','Risk Management and Report'],
        UI_Development_and_Design:['User-Centred Design','Software Quality','Usablity Design','Itertative prototyping'],
        Internet_Of_Things:['Raspberry pi','Arduino','Circuit building and device deployment'],
   }

    const Experience={

    }
    for(let s in Technical){
           //console.log(s+Technical[s]);     
    }

    return(
        <div  style={{position:'relative',backgroundPosition:'center',backgroundSize:'100%', backgroundAttachment:'fixed',color:'black'}} >
             
            
            <div className="text-center">
                <h4 className="btn btn-warning disabled " style={{color:'black',opacity:'1',borderRadius:'25px', fontSize:'25px',marginBottom:'5%'}}>
                    My current Skill set<br></br>
                </h4>
            </div>
                {Object.keys(Technical).map((heading,index)=>(

                <div key ={index} style={{zIndex:'2',paddingBottom:'3%'}}>
                    <h5 className="btn btn-warning disabled" style={{color:'black',opacity:'0.7',borderRadius:'25px', fontSize:'20px'}}>{heading}</h5><br></br>
                    {/* <span>{console.log(Technical[val])}</span> */}
                    <span>
                        {Object.keys(Technical[heading]).map((value,index)=>(
                                <span key={index} className ="btn btn-dark disabled" style={{marginLeft:'1%',color:'white',opacity:'1',borderRadius:'25px'}}>
                                    {Technical[heading][value]}
                                </span>
                            ))}               
                    </span>
                    <br></br>
                </div>
                 ))}   
       </div>  
                   
       
    );
}

export default SkillSet;