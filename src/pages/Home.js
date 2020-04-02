import React,{ Component, useRef, useState, useEffect} from 'react';
import {Container,Image} from 'react-bootstrap';
import HomePageCss from '../css/HomePage.module.css';
import Fade from 'react-reveal/Fade';
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
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
    <div style ={{zIndex:'4'}}>
       {repoList.map((val,index)=>(
            <div key ={index} style={{display:'inline-block',zIndex:'4'}} >
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


const ReactModal=(props)=>{
    console.log(props.message2modal);
    
    const Data={
        184210862:['A personal project for coursework on Internet of Things','Used Arduino and a raspberry pi to create a light bulb that glows on and off in response to proximity sensor, the device has applications in home security ','C, python,','projects/IOT'],
        189182699:['A Group project for coursework on Internet of Things','Used Arduino and a raspberry pi to create a game where sounds were used to create random notes and guesses were made by user through remote to note the user success and failure and shown on a website hosted on raspberry pi 3','C, python,','projects/IOT_G'],
        206076459:['An assignment for coursework advanced java, using buffers to read through document to find repeated keywords','Used Arduino and a raspberry pi to create a game where sounds were used to create random notes and guesses were made by user through remote to note the user success and failure and shown on a website hosted on raspberry pi 3','C, python,','projects/Java_Keyword'],
        40567:['A GUI equipped Java Keyword for searching and visualizing data','Advancement from Java Keyword assignment, this project uses mvc framework and java fx for visualizing top keyword in the selected document, the user provides keyword and top co-occuring keywords are listed','Java, Java FX, mvc','projects/Java_Keyword_Search'],
        213589674:['A personal portfolio project','','JavaScript, ReactJS','projects/Java_Keyword'],
        163469163:['A project done from coursework in coursera.org','Created a website for a restaurant utilising react and redux framework','React, JavaScript, HTML5','null'],
        193052482:['Advancing in react project ','Practises and different concept practises gained from Researcha and Dev','React, JavaScript, Node JS','projects/react-tute'],
        174096793:['Final year Project at Swinburne','created a web application utilising leaflet maps, javascript and PHP for clients to upload data to Nectar cloud and visualized in maps','PHP, JavaScript, Nectar Cloud','screenshot','projects/SDP'],
   }
 
   const slides =(name)=>{
        console.log("Slides")
        console.log(props.APIData);

        let Slides = [];
    
        Object.keys(props.APIData).map((folder)=>{
           console.log('FolderName:'+folder);
            console.log('Name'+name);
            if(folder.trim().toLocaleLowerCase()==name.trim().toLocaleLowerCase()){
               // console.log('Folderchosen'+folder)
                let folderitems = [];
                folderitems.key=folder;
                let Imagenames = props.APIData[folder];
            
                Imagenames.map((value)=>{
                    value = 'http://localhost:3002/projects/'+folder+'/'+value;
                    //folderitems.push(value);
                    Slides.push(value)
                    console.log(value);
                })
                //Slides.push(folderitems);
            }
            
        });

        console.log(Slides);
        return Slides;
   }

   let slides_continue =()=>{
       let sld_htm = [];
       slides(returndat()).forEach((value,index)=>(
        sld_htm.push(<img key={index+1} src ={value} style={{width:'1100px',height:'400px'}}/>)
   ))
        return sld_htm;
   }

   let data = parseInt(props.message2modal);
   let obj = Data[data];
   let togglefunction = props.openproject;
   let git = props.gitData;

   let returndat =()=>{
        let TitleName=null 
        git.map((val,index)=>{
            if (val.id==data){
                TitleName= val.name     
            }
         })
         //temporary
        return TitleName;
   }

   let projectdesc =()=>{
       let Project_desc = "";
         Object.keys(Data).map((item)=>{
        //console.log(Data[items]);
            if (item==data){
                Project_desc= Data[item];
                console.log(Project_desc[0]);
                }
            })
       return Project_desc

   }

   let repolink =()=>{
    git.map((val,index)=>{
        if (val.id==data){
            window.open(val.html_url);
        }
     })
   }

   
    return(
        <div>
            <div>{slides}</div>
            {(obj==undefined)?null:
            <Modal isOpen={props.triggerevent} className="modal-lg">

                <ModalHeader className= "d-block">
                    <h3 style={{margin:0,float:'left'}}>{returndat()}</h3> 
                    <button style ={{float:'right'}}type="button" class="close" data-dismiss="modal" aria-label="lose" onClick={()=>{togglefunction(null,false);}}>x</button> 
                </ModalHeader>
                


                <ModalBody>
                   <Carousel slidesPerPage={1} slides ={slides_continue()} arrows clicktochange />
                   <div style={{backgroundColor:'black',color:'White',opacity:'0.75',textAlign:'center'}}> 
                        <h4>
                            Project Description
                        </h4>
                            {projectdesc()[0]}
                            <p>

                            </p>
                        <h6>
                            {projectdesc()[1]}
                        </h6>
                        <Button className="btn btn-primary text-center" onClick={()=>{repolink()}}>GitHub</Button>
                    </div>
                </ModalBody>
                

            </Modal>}
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
        APIData:[],
        open_prj_info:false,
        open_prj_id:""
    }

    

    margin_ = {
        margin:'5px',
    }
    
    componentDidMount= function() {
        window.addEventListener('scroll', this.handleScroll);
        this.getGitData();                              //get Github data
        this.getAPIData();
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
            this.setState({GitHubData:data});                   //fetch data from Github and post it to the state Github Data
            console.log(data);
        });
    }


    getAPIData = async()=>{
        console.log("3002 localhost data");
        await fetch('http://localhost:3002',{
            method:'GET',
            mode:'cors',
           header:{
               'Content-Type':'application/json'
           },
        })
        .then((response)=>{
            console.log('response loaded')
            console.log(response.data);
            response.json().then((data)=>{
                console.log('Datafile hosted locations')
                console.log(data);
                this.setState({APIData:data})
            })
        })
        .catch((error)=>{
            console.log(error);
        })
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
                        
                            <Fade cascade when ={!this.state.triggerevent} timeout='500'>
                                <hr className={HomePageCss['hr1']}/>
                            </Fade>    
                    
                            <Image className={HomePageCss['ppic']} onClick={()=>this.clickhandler()} src={require("../resources/meliodas.jpg")} roundedCircle />
                    

                            <Fade bottom when={this.state.triggerevent} timeout='500' >

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
                    

                    <div className = "text-center" style={{paddingTop:'20%',marginBottom:'15%'}}>
                        <h3 className ="bold"> Projects</h3>
                        
                        <div style={{border:'1px solid black',zIndex:4}}>
                            <GitRepo name={this.state.GitHubData} openproject={this.open_prj_infohandler} style={{zIndex:4}}/>
                        </div>

                    </div>

                   
                    <SkillSet/>
                    
                    <ReactModal message2modal={this.state.open_prj_id} triggerevent={this.state.open_prj_info} APIData ={this.state.APIData} openproject={this.open_prj_infohandler} gitData = {this.state.GitHubData}/>
                    {/*-----form to accept emails and requests -----*/}

                    
                    {/*-----About Page -----*/}
                    <div style ={{background:'Black',opacity:'0.75',color:'white',marginTop:'5%'}} className="text-center row">
                            <div className="col-sm-6">
                                <div className="text-left">Binay Dhawa</div>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-right">2020<br></br>
                                Created Using ReactJS
                                </div>
                            </div>
                    </div>
                    
            </Container>
            

        );
    }
}

export default Home;