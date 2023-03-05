const validation = (values) => {
    let errors={}

    if(!values.email){
        errors.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }

    if(!values.phone){
        errors.phone="Phone is required."
    }else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)){
        errors.phone= "Phone is invalid."
    }else if(values.phone.match(/\d/g).length!==10){
        errors.phone= "Phone must be 10 numbers."// only count number
    } 
    
    return errors
}

export default validation