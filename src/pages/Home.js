import React,{ Component} from 'react';
import {Container,Image} from 'react-bootstrap';
import HomePageCss from '../css/HomePage.module.css';
import Fade from 'react-reveal/Fade';
import codeImg from "../resources/program.jpg";



const GitRepo =(props) =>{
    const repoList = props.name;

    return(
    <div>
       {repoList.map((val,index)=>(
            <div key ={index} style={{display:'inline-block',zIndex:'2'}}>
                <Image src={require("../resources/folder.png")} style={{width:'55%',marginLeft:'5%',cursor:'pointer'}} onClick={()=>window.location.href=val.html_url}  /><br>
                </br>
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
           console.log(s+Technical[s]);     
    }

    return(
        <div  style={{position:'relative',backgroundPosition:'center',backgroundSize:'100%', backgroundAttachment:'fixed', backgroundImage:`url(${codeImg})`,color:'white'}} >
             
            
            <h4 className="text-center" style={{padding:'5%'}}>
                My current Skill set<br></br>
            </h4>
                {Object.keys(Technical).map((heading,index)=>(
                <div key ={index} style={{zIndex:'2',paddingBottom:'3%'}}>
                    <h5>{heading}</h5>
                    {/* <span>{console.log(Technical[val])}</span> */}
                    <span>
                        {
                            Object.keys(Technical[heading]).map((value,index)=>(
                                <span key={index} style={{paddingLeft:'1%'}}>
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


class Home extends Component{

    state ={
        triggerevent:false,
        Scroll:false,
        GitHubData:[],
    }

    

    margin_ = {
        margin:'5px',
    }
    
    componentDidMount= function() {
        window.addEventListener('scroll', this.handleScroll);
        this.getGitData();
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
            this.setState({GitHubData:data});
        });
    }

   
    
    clickhandler(){
        this.setState({triggerevent:!this.state.triggerevent})
        console.log(this.state.triggerevent);
    }

    ScrollHandler=()=>{
       console.log("Scroll event");
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
                        

                    <div className = "text-center" style={{paddingTop:'20%',marginBottom:'25%'}}>
                        <h3 className ="bold"> Projects</h3>
                        
                        <div style={{border:'1px solid black'}}>
                            <GitRepo name={this.state.GitHubData}/>
                        </div>

                    </div>

                   
                    <SkillSet/>
                </Container>
            

        );
    }
}

export default Home;