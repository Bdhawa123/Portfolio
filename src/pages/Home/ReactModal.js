import {Modal, ModalHeader, ModalBody, Table,Button} from 'reactstrap';
import React,{useState, useEffect} from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Data from './DataFile';
import noImg from '../../resources/noImage.jpg';




const ReactModal = ({message2modal,triggerevent,openproject,gitData})=>{

    const [imageTitle,setImageTitle] = useState('');
    const [shortDesc,setShortDesc] = useState('');
    const [longDescription,setLongDesc] = useState('');
    const [Language,setLanguage] = useState('');
    let tempImg = [];


    useEffect(()=>{
        if(message2modal!=null){
            Data.map(({id,src,shortDescription,projectDesc,languages,title})=>{
                if (message2modal==id){
                    console.log(src);
                    setImageTitle(title);
                    setLanguage(languages);
                    setShortDesc(shortDescription);
                    setLongDesc(projectDesc);

                   if (src!=null){
                        console.log(src);
                        let i =0;
                        src.map((imageref)=>{
                            console.log(i++,imageref)
                            tempImg.push(<img src={imageref} width='600px' height='400px'/>) 
                        })
                   }else{
                        tempImg.push(<img src={noImg}  width='600px' height='400px'/>)
                   }
                }
            })
        }
    })
  

    let repolink =()=>{
        gitData.map((val)=>{
            if (val.id==message2modal){
                window.open(val.html_url);
            }
        })
     }

    return(<div>
            <Modal isOpen={triggerevent} className="modal-lg">

                <ModalHeader className= "d-block" style={{color:'white',backgroundColor:'#2f7940',opacity:'0.75'}}>
                    <button style ={{float:'right'}}type="button" class="close" data-dismiss="modal" aria-label="lose" onClick={()=>{openproject(null,false);}}>x</button> 
                    <h3 style={{textAlign:'center'}}>{imageTitle}</h3> 
                    <div style={{fontWeight:'300',fontSize:'16px',textAlign:'center'}}>{shortDesc}</div>
                </ModalHeader>


                <ModalBody>
                   <Carousel slidesPerPage={1} slides ={tempImg} arrows clicktochange />
                    <Table borderless style={{marginTop:'3%'}}>
                        <tbody >
                            <div style={{backgroundColor:'#2f7940',color:'White',opacity:'0.75',}}>
                            <tr>
                                <td style={{width:'24%',verticalAlign:'middle',justifyContent:'center',fontWeight:'18px',fontWeight:'bold'}}>Project Description:</td>
                                <td style={{fontWeight:'200'}}>{longDescription}</td>
                            </tr>
                            <tr>
                                <td style={{width:'24%',verticalAlign:'middle',justifyContent:'center',fontWeight:'18px',fontWeight:'bold'}}>Language:</td>
                                <td style={{fontWeight:'200'}}>{Language}</td>
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