const data = require('./data')

module.exports = {
///get
    getdata: (req, res)=> {
      
        res.json(data)
    },
deleted: (req, res)=> {
  ///delete
    const index = data.findIndex(item => item.id === +req.params.id)
    const gone = data.splice(index, 1)
    res.json(data)
    
},


comment:(req, res)=>{
    const index = data.findIndex(item => item.id === +req.params.id)
   data[index].likes = 1;
   res.json(data)
},
postComment: (req, res)=>{
     const index = data.findIndex(item => item.id === req.body.id)
     data[index].comment = req.body.inputs
     res.json(data)
}
}