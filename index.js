const validateData = (userData) => {
   let errors = []
   if (!userData.firstname) {
       errors.push('กรุณากรอกชื่อ')
   }
   if (!userData.lastname) {
       errors.push('กรุณากรอกนามสกุล')
   }
   if (!userData.age) {
       errors.push('กรุณากรอกอายุ')
   }
   if (!userData.gender) {
       errors.push('กรุณาเลือกเพศ')
   }
   if (!userData.interests) {
       errors.push('กรุณาเลือกความสนใจ')
   }
   if (!userData.description) {
       errors.push('กรุณากรอกข้อมูล')
   }
   return errors
}
const submitData = async () => {
    let firstNameDom = document.querySelector('input[name=firstname]');
    let lastNameDom = document.querySelector('input[name=lastname]');
    let ageDom = document.querySelector('input[name=age]');
    let genderDom = document.querySelector('input[name=gender]:checked') || {}
    let interestDoms = document.querySelectorAll('input[name=interest]:checked') || {}
    let descriptionDom = document.querySelector('textarea[name=description]');
    
    let messageDOM = document.getElementById('message');
    
    try {
    let interest = ''
    for (let i = 0; i < interestDoms.length; i++) {
        interest += interestDoms[i].value;
        if (i != interestDoms.length - 1) {
            interest += ', '
        }
    }

    let userData = {
        firstname: firstNameDom.value,
        lastname: lastNameDom.value,
        age: ageDom.value,
        gender: genderDom.value,
        description: descriptionDom.value,
        interests: interest
    }
    console.log('submitData',userData);
    /*
        const errors = validateData(userData)

        if(errors.length > 0) {
            //มี error
            throw {
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors : errors
            }
        }
    */
        const response = await axios.post('http://localhost:8000/users', userData)
        console.log('response',response.data)
        messageDOM.innerText = "บันทึกข้อมูลเรียบร้อย"
        messageDOM.className = 'message success'
    } catch (error) {
        console.log('error message',error.message)
        console.log('error',error.errors)
        
       if (error.response) {
            console.log('error',error.response.data.message)
            error.message = error.response.data.message
            error.errors = error.response.data.errors
       }
        
       let htmlData = '<div>'
       htmlData += `<div> ${error.message} <div>`
       htmlData += '<ul>'
       for (let i = 0; i < error.errors.length; i++) {
           htmlData += `<li> ${error.errors[i]} </li>`
       }
       htmlData += '</ul>'
       htmlData += '</div>'

       messageDOM.innerHTML = htmlData
       messageDOM.className = 'message danger'
    }
}