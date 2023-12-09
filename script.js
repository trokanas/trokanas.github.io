const name = document.getElementById('fname')
const email = document.getElementById("femail")
const form = document.getElementById("fform")
const errorElement = document.getElementById("error")



form.addEventListener('fsubmit', (e) => {
    let messages = []
    if (fname.value === '' || fname.value == null){
        messages.push('name is required')

    }

    if (fname.length <= 6 ){
        messages.push('')
    }

    if (messages.length > 0 ){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

}
)