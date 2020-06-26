import React,{ useState, useEffect }from 'react';
import {Modal, ModalHeader, ModalBody, Table,Button} from 'reactstrap';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Data={
    184210862:['Internet of Things',
                'A personal project for coursework on Internet of Things',
                'Used Arduino and a raspberry pi to create a light bulb that glows on and off in response to proximity sensor, the device has applications in home security ',
                'C, python,',
                'projects/IOT',
                4],
    189182699:['Internet of Things (Group work)',
                'A Group project for coursework on Internet of Things',
                'Used Arduino and a raspberry pi to create a game where sounds were used to create random notes and guesses were made by user through remote to note the user success and failure and shown on a website hosted on raspberry pi 3',
                'C, python,',
                'projects/IOT_G',
                6],
    206076459:['Java Keyword Assignment',
                'An assignment for coursework advanced java, using buffers to read through document to find repeated keywords',
                'Used Arduino and a raspberry pi to create a game where sounds were used to create random notes and guesses were made by user through remote to note the user success and failure and shown on a website hosted on raspberry pi 3',
                'C, python,',
                'projects/Java_Keyword',
                3],
    213589674:['Java Keyword Search and visualization',
                'A GUI equipped Java Keyword for searching and visualizing data',
                'Advancement from Java Keyword assignment, this project uses mvc framework and java fx for visualizing top keyword in the selected document, the user provides keyword and top co-occuring keywords are listed',
                'Java, Java FX, mvc',
                'projects/Java_Keyword_Search',
                6],
    193052482:['React Project',
                'A project done from coursework in coursera.org',
                'Created a website for a restaurant utilising react and redux framework',
                'React, JavaScript, HTML5',
                'projects/react-2',
                5],
    174096793:['Final Year Project',
                'Final year Project at Swinburne',
                'created a web application utilising leaflet maps, javascript and PHP for clients to upload data to Nectar cloud and visualized in maps',
                'PHP, JavaScript, Nectar Cloud',
                'projects/SEPAB-34',
                2],
    252630624:['Quaranteams',
                'Hackathon Project',
                'A prototype application created for hack the crisis 2020 Australia',
                null,
                null,
                null],
    258786973:['FishTail',
                'Inventory management application',
                'Database management system using simplified UI for managing Sales and Inventory',
                'React,JavaScipt,Bootstrap, Reactstrap,flexbox',
                null,
                null],
    257617752:['React application to learn hooks and context API',
                'Net Ninja youtube tutorial',
                'Uses local database javascript to change styles in  UI and read formdata ',
                'Context API, React',
                null,
                null],
}



const ReactModal = ({message2modal,triggerevent,openproject,gitData})=>{

      const slides =()=>{
        console.log('slides is being called')
        if(message2modal!=null){
            if(Object.keys(Data).includes(message2modal.toString())){
                console.log('True')
                let selectedObj = Data[message2modal];
                let images=[];
                if(selectedObj[5]!=null){    
                    for(let i = 0;i<selectedObj[5];i++){

                        if(selectedObj[4]!=null){
                                let imgVal = `/resources/${selectedObj[4]}/${(i+1).toString()}.jpg`;                        
                                let imgref = <img src={window.location.origin+ imgVal} style={{width:'1100px',height:'400px'}}/>;
                                images.push(imgref)
                            }
                        }
                }else{
                    console.log('No Image found')
                    images.push(<img src={window.location.origin+ '/noImage.jpg'} style={{width:'1100px',height:'400px'}}/>)
                }
                return images;

            }else{
                console.log('Data does not contain message2modal or first render')  
            }
        }else{
            console.log('message2modal false')
        }
    }


    let repolink =()=>{
        gitData.map((val)=>{
            if (val.id==message2modal){
                window.open(val.html_url);
            }
        })
     }

    const shortDescription = ()=>{
        let descrip = "";
        if(Data[message2modal]!=null){
            descrip = Data[message2modal][1]
        }
        return descrip;
    }

    const projectDesc = ()=>{
        let descrip = "";
        if(Data[message2modal]!=null){
            descrip = Data[message2modal][2]
        }
        return descrip;
    }

    const languages = ()=>{
        let language = "";
        if(Data[message2modal]!=null){
            language = Data[message2modal][3]
        }
        return language;
    }



    const returnTitle =()=>{
        let title = "";
        if(Data[message2modal]!=null){
            title = Data[message2modal][0]
        }
        return title;
    }

    return(<div>
            <div>{slides()}</div>
            <Modal isOpen={triggerevent} className="modal-lg">

                <ModalHeader className= "d-block" style={{color:'white',backgroundColor:'#2f7940',opacity:'0.75'}}>
                    <button style ={{float:'right'}}type="button" class="close" data-dismiss="modal" aria-label="lose" onClick={()=>{openproject(null,false);}}>x</button> 
                    <h3 style={{textAlign:'center'}}>{returnTitle()}</h3> 
                    <div style={{fontWeight:'300',fontSize:'16px',textAlign:'center'}}>{shortDescription()}</div>
                </ModalHeader>
                


                <ModalBody>
                   <Carousel slidesPerPage={1} slides ={slides()} arrows clicktochange />
                    <Table borderless style={{marginTop:'3%'}}>
                        <tbody >
                            <div style={{backgroundColor:'#2f7940',color:'White',opacity:'0.75',}}>
                            <tr>
                                <td style={{width:'24%',verticalAlign:'middle',justifyContent:'center',fontWeight:'18px',fontWeight:'bold'}}>Project Description:</td>
                                <td style={{fontWeight:'200'}}>{projectDesc()}</td>
                            </tr>
                            <tr>
                                <td style={{width:'24%',verticalAlign:'middle',justifyContent:'center',fontWeight:'18px',fontWeight:'bold'}}>Language:</td>
                                <td style={{fontWeight:'200'}}>{languages()}</td>
                            </tr>
                            </div>
                        </tbody>
                    </Table>
                    <div style={{textAlign:'center'}}>
                        <Button outline color="success" onClick={()=>{repolink()}}>GitHub</Button>
                    </div>
                </ModalBody>
                

            </Modal>
        </div>)
}

export default ReactModal;