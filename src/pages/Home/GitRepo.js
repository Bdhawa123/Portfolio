import React from 'react';
import {Container,Image} from 'react-bootstrap';
const filterData =[258786973,
    184510862,
    189182699,
    206076459,
    213589674,
    252630624,
    193052482,
    257617752,
    174096793,
    184210862
]
const GitRepo =({repoList,openproject})=>{    
    return(
        <div style ={{zIndex:'4'}}>
        {repoList.map((val,index)=>{
            if (filterData.includes(val.id)){
                console.log(val.id+val.name)
                return(
                    <div key ={index} style={{display:'inline-block',zIndex:'4'}} >
                        <div>
                            <Image src={require("../../resources/folder.png")} style={{width:'55%',marginLeft:'5%',cursor:'pointer'}} onClick={()=>{openproject(val.id,true)}} />
                        </div>
                        
                        <span>{val.name}</span>
                    </div>
            )}
        })}
        </div>);
}

export default GitRepo;
