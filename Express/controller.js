let {people} = require('./people')

const reader = (req,res)=>{
    res.status(200).json({success:true,data:people})
    console.log('shit read')
}


const creator = (req,res)=>{
    const {name} = req.body
    if (!name){
        return res.status(400).json({success: false, msg:'please provide a name'})
    }
    const newp = {id: people.length+1,name}
    people.push(newp)
    res.status(201).json({success: true, data: people})
    console.log('shit created')
}

const updater = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person)=>person.id === Number(id))

    if (!person){
        return res.status(404).json({success: false, msg:`person with id ${id} not found`})
    }
    person.name = name 
    res.status(200).json({success:true,data:people})
    console.log('shit updated')
}

const deleter = (req,res)=>{
    const {id} = req.params

    const person = people.find((person)=> person.id === Number(id))
    
    if (!person){
        return res.status(404).json({success:false,msg:`person with id ${id} not found`})
    }
    people = people.filter((person)=>person.id !== Number(id))
    res.status(200).json({success: true, data: people})
    console.log('shit deleted')
}

module.exports = {reader,creator,updater,deleter}