import React,{ Component, useRef, useState, useEffect} from 'react';
import {Container,Image} from 'react-bootstrap';
import HomePageCss from '../css/HomePage.module.css';
import Fade from 'react-reveal/Fade';
import {Modal, ModalHeader, ModalBody, ModalFooter, button} from 'reactstrap';
import ReactHover from 'react-hover';
import codeImg from "../resources/program.jpg";



const GitRepo =(props) =>{

    const repoList = props.name

    let mouseent = (val)=>{
        let startTime = new Date();
        setTimeout(
            ()=>{
                let endTime = new Date()
                let timediff = (endTime- startTime)/1000;
                if(timediff>=0.5){
                    props.togglehover(true,val.id)
                   console.log('a second has passed')
                   
                }
        },500)    
        //onMouseEnter={()=>{props.togglehover(true,val.id)}}    
    }
    

    
    return(
    <div>
       {repoList.map((val,index)=>(
            <div key ={index} style={{display:'inline-block',zIndex:'2'}} >
                <div>
                    
                    <Image src={require("../resources/folder.png")} style={{width:'55%',marginLeft:'5%',cursor:'pointer'}} onClick={()=>{props.openproject(val.id,true)}} />
                    
                </div>
                
                <span>{val.name}</span>
            </div>
       ))}
    </div>
    );
}

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
                        {
                            Object.keys(Technical[heading]).map((value,index)=>(
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


const ReactModal=(props)=>{
    console.log(props.message2modal);
    
    const Data={
        184210862:['A personal project for coursework on Internet of Things','Used Arduino and a raspberry pi to create a light bulb that glows on and off in response to proximity sensor, the device has applications in home security ','C, python,','imagesource'],
        189182699:['A Group project for coursework on Internet of Things','Used Arduino and a raspberry pi to create a game where sounds were used to create random notes and guesses were made by user through remote to note the user success and failure and shown on a website hosted on raspberry pi 3','C, python,','imagesource'],
        206076459:['An assignment for coursework advanced java, using buffers to read through document to find repeated keywords','Used Arduino and a raspberry pi to create a game where sounds were used to create random notes and guesses were made by user through remote to note the user success and failure and shown on a website hosted on raspberry pi 3','C, python,','imagesource'],
        40567:['A GUI equipped Java Keyword for searching and visualizing data','Advancement from Java Keyword assignment, this project uses mvc framework and java fx for visualizing top keyword in the selected document, the user provides keyword and top co-occuring keywords are listed','Java, Java FX, mvc','screenshots'],
        213589674:['A personal portfolio project','','JavaScript, ReactJS','screenshot'],
        222364953:['A project done from coursework in coursera.org','Created a website for a restaurant utilising react and redux framework','React, JavaScript, HTML5','screenshot'],
        193052482:['Advancing in react project ','Practises and different concept practises gained from Researcha and Dev','React, JavaScript, Node JS','screenshot'],
        174096793:['Final year Project at Swinburne','created a web application utilising leaflet maps, javascript and PHP for clients to upload data to Nectar cloud and visualized in maps','PHP, JavaScript, Nectar Cloud','screenshot'],
   }

   let data = parseInt(props.message2modal);
   let obj = Data[data];
   let togglefunction = props.openproject;
   
    return(
        <div>
            <button type="button" class="close" data-dismiss="modal" onClick={()=>{togglefunction(null,false); alert('write');}}>Close</button>
            <Modal isOpen={props.triggerevent}>
                <ModalHeader toggle ={togglefunction}>Modal title</ModalHeader>
                {/* <ModalHeader>{props.message2modal}</ModalHeader> */}
                {(obj==undefined)?null:
                    <ModalBody>
                        {obj}
                    </ModalBody>
                }

            </Modal>
        </div>
       
    );
}


class Home extends Component{

    constructor(props){
        super(props);
        // this.myRef = Rea
        //this.togglehover= this.togglehover.bind(this);
        this.open_prj_infohandler = this.open_prj_infohandler.bind(this);
    }

    state ={
        triggerevent:false,
        Scroll:false,
        GitHubData:[],
        open_prj_info:false,
        open_prj_id:""
    }

    

    margin_ = {
        margin:'5px',
    }
    
    componentDidMount= function() {
        window.addEventListener('scroll', this.handleScroll);
        this.getGitData();                              //get Github data
    }
    
    componentWillUnmount= function() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    handleScroll =()=>{
       if(this.state.triggerevent){
           console.log(window.pageYOffset)
            if (window.pageYOffset>'600'){
                this.setState({triggerevent:!this.state.triggerevent})
            }
       }
    }

    getGitData =async()=>{
        await fetch('https://api.github.com/users/Bdhawa123/repos')
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data);
            this.setState({GitHubData:data});                   //fetch data from Github and post it to the state Github Data
        });
    }

   
    
    clickhandler(){
        this.setState({triggerevent:!this.state.triggerevent})
        console.log(this.state.triggerevent);
    }

    ScrollHandler=()=>{
       console.log("Scroll event");
    }


    //handler to open info about projects
    open_prj_infohandler = (id,boolval)=>{
        this.setState({open_prj_info:boolval});
        this.setState({open_prj_id:id});
        console.log("Open project handler called");
        console.log(this.state.open_prj_info);
        console.log(id);
    }

    

    togglehover=(isModalOpen,name)=>{
        this.setState({hover_repo:isModalOpen});
        if(name!=null){
            this.setState({hover_message:name});
        }
        
    }

    

    
    render(){
        return(
             <Container >
               
                        <div className={HomePageCss['main_container']} onscroll={this.ScrollHandler}  >
                        
                            <Fade cascade when ={!this.state.triggerevent} timeout='1500'>
                                <hr className={HomePageCss['hr1']}/>
                            </Fade>    
                    
                            <Image className={HomePageCss['ppic']} onClick={()=>this.clickhandler()} src={require("../resources/meliodas.jpg")} roundedCircle />
                    

                            <Fade bottom when={this.state.triggerevent} timeout='1500' >

                                <div className={HomePageCss['ppic_click_open']} style={(this.state.triggerevent)?{zIndex:3}:{zIndex:0}} >
                                    {/* There should be some content regarding two columns for resumes */}
                                    <div className="row">

                                        <div className="col-lg-6 col-md-6 col-12-xs col-12-s" style={{left:'25px'}}  >
                                            <div className="Red text-left" style={{backgroundColor:'#8b949e',opacity:'0.9',color:'light-blue',paddingTop:'11px'}}>
                                                    <h2>EDUCATION</h2>
                                                    <div style={{marginBottom:'50px'}}></div>
                                                
                                                    <h5>High School</h5>
                                                    <span>St Xavier's Jawalakhel</span>
                                                    <div style={{marginBottom:'50px'}}></div>
                                                    <h5>Diploma</h5>
                                                    <span>Swinburne University Of Technology</span><br></br>                                          
                                                    <span>Diploma of IT</span>
                                                    <div style={{marginBottom:'50px'}}></div>
                                                
                                                    <h5>Bachelor</h5>
                                                    <span>Swinburne University Of Technology</span><br></br>
                                                    <span>Bachelor of Computer Science(Software Dev)</span> <br></br>   
                                                    <div style={{marginBottom:'50px'}}></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12-xs col-12-s" >
                                                <h2>A BIT ABOUT MYSELF</h2> 
                                                <span>I'm awesome !!!</span>  
                                            </div>
                                    </div>
                                </div>
                            </Fade>  
                        </div>

                        <div className ="text-center"  >
                            <h3>Find Me On LinkedIn and GitHub</h3>    
                            
				        	<Image className={HomePageCss['logo']} onClick={()=>window.location.href="https://www.linkedin.com/in/binay-dhawa-8b212b34/"} src={require("../resources/LinkedIn.png")} roundedCircle />
                            	<Image className={HomePageCss['logo']} onClick={()=>window.location.href="https://github.com/Bdhawa123"} src={require("../resources/github_logo.png")} roundedCircle />
                        </div>
                        
                     {/* {this.state.hover_repo?<ReactModal message2modal={this.state.hover_message}/>:null} */}
                        {/* <Modal isOpen={this.state.hover_repo}>
                            <div>
                                {this.state.hover_message}
                            </div>
                        </Modal> */}

                    <div className = "text-center" style={{paddingTop:'20%',marginBottom:'25%'}}>
                        <h3 className ="bold"> Projects</h3>
                        
                        <div style={{border:'1px solid black'}}>
                            <GitRepo name={this.state.GitHubData} openproject={this.open_prj_infohandler} val/>
                        </div>

                    </div>

                   
                    <SkillSet/>
                    
                    
                    <Fade when={this.state.open_prj_info}> 
                        <ReactModal message2modal={this.state.open_prj_id} triggerevent={this.state.open_prj_info} gitData ={this.state.GitHubData} openproject={this.open_prj_infohandler}/>
                    </Fade>
                </Container>
            

        );
    }
}

export default Home;