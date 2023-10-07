const SHORTCODEAPI = 'https://api.shrtco.de/v2/shorten?url='
const shortenBtn = document.getElementById('shorten-btn')
const userInput = document.querySelector('input')
const links = document.querySelector('.links')
const copy_btn = document.querySelector('.copy-btn') 
const errorMessage = document.querySelector('.error-message')



const copiedLink = null

shortenBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(userInput.value == ''){
        errorMessage.classList.add('active')
        userInput.style.border = '2px solid red'
        userInput.focus()
    }
    getShortenedLink(userInput.value)
    userInput.value = ''
})

copyLink = () => {
    copy_btn.style.backgroundColor = 'hsl(257, 27%, 26%)'
    copy_btn.innerHTML = 'copied!'
    console.log('you clicked the copy button')
}


function getShortenedLink(link){
    try{
        axios(SHORTCODEAPI + link)
        .then(res => {
           const { data }  = res
           console.log(data)
           const link = `
           <div class="link">
               <a  href="#" id="original-link">${data.result.original_link}</a>
               <a  href="#" id="shortened-link">${data.result.short_link}</a>
               <button class='copy-btn' ${onclick = 'copyLink'}>copy</button>
           </div>
           `
           links.innerHTML = link
           
        })   
    }catch(err) {
        console.log(err)
    }

}