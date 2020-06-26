import React,{ Component, useRef, useState, useEffect} from 'react';
import {Container,Image} from 'react-bootstrap';
import HomePageCss from '../css/HomePage.module.css';
import Fade from 'react-reveal/Fade';
import GitRepo from './Home/GitRepo'
import SkillSet from './Home/SkillSet'
import ReactModal from './Home/ReactModal';

class Home extends Component{

    constructor(props){
        super(props);
        this.open_prj_infohandler = this.open_prj_infohandler.bind(this);
    }

    state = {
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
                            <GitRepo repoList={this.state.GitHubData} openproject={this.open_prj_infohandler} style={{zIndex:4}}/>
                        </div>

                    </div>

                   
                    <SkillSet/>
                    
                    <ReactModal message2modal={this.state.open_prj_id} triggerevent={this.state.open_prj_info} openproject={this.open_prj_infohandler} gitData = {this.state.GitHubData}/>
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