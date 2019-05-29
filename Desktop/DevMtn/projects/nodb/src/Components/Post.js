import React, {Component}from 'react'
import axios from 'axios'

class Post extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            comment: false,
            love: true,
            appreciate: '',
            current:''
        
        }
       
    }
            componentDidMount(){         
                axios.get('/api/getdata').then(res => {
                    this.setState({
                        data: res.data
                    })
                })
            }
    
            

     render(){
       console.log(this.state.appreciate)
         const mappedData = this.state.data.map(item => {
             return (
                 <ul key={item.id}>
                     <img src={item.product} width="300" alt="lux"/>
                     <li>{item.car}</li>
                     <li>{item.comment}</li>
                     {item.likes === 0? <i className="far fa-heart" onClick={(e)=>{
                         e.preventDefault()
                         this.setState({love:!this.state.love})
                         axios.put(`/api/appreciate${item.id}`, {
                        }).then(res => {
                            this.setState({
                                data: res.data
                            })
                        })
                        }
                        
                        
                        }></i> : <i className="fas fa-heart" onClick={()=>this.setState({love:!this.state.love})}></i>
                    
                     }
                   
                     {this.state.comment && item.id === this.state.current && <input 
                     onChange={(e)=>{
                         this.setState({
                             appreciate: e.target.value
                         })
                     }
                        
                     }
                     
                     />}
                     {this.state.comment && this.state.current === item.id ? <button onClick={(e)=> {
                        //  e.preventDefault()
                        axios.post("/api/postcomment", {
                            id: item.id,
                            inputs: this.state.appreciate
                     }).then(res => {
                            this.setState({
                                  data: res.data
                              })
                        })
                         this.setState({comment: !this.state.comment})
                         
                       
   


                     }}>Post</button> : <button onClick={()=> {
                         this.setState({comment: !this.state.comment})
                         this.setState({current:item.id})
                         }}>Comment</button>}
                    
                     <button
                     onClick={(e)=> {
                         e.preventDefault()
                        
                        axios.delete(`api/delete${item.id}`).then(res => {
                         this.setState({data: res.data})
                     })}}
                     
                     >Delete</button>
                 </ul>
             )
         })
         return( 
             <div id="cont">
                 {mappedData}
             </div>
         )
     }
    
}
export default Post