// Breaking button click event
const leftBtn = document.querySelector('.breakings_leftBtn')
const rightBtn = document.querySelector('.breakings_rightBtn')
const breaking = document.querySelector('.breaking')

let i = 0

leftBtn.addEventListener('click', ()=>{
    i++
    if(i > 3){
        or = 3-(i %4)
        deleteBreaking()
        changeBreaking(or)
    } else{
        or = 3 - i
        deleteBreaking()
        changeBreaking(or)
    }
})
rightBtn.addEventListener('click',(e)=>{
    i++
if(i > 3){
    or = i % 4
    deleteBreaking()
    changeBreaking(or)
} else {
    or = i
    deleteBreaking()
    changeBreaking(or)
}
})

imgArray = ["1.png", "2.png", "3.jpg", "4.jpg"]
txtArray =[
    `Gilderoy Lockhart, six solid months at the top of the best seller list was in Flourish and Blotts yesterday signing his new book "Magical Me". The bookstore was crammed full of admiring fans most of which were women. Gilderoy Lockhart Wizard Extraordinaire, bewitches and bedazzles us yet again with another toe-nail-bitting account of his heroic encounters with the dark side. Wrestled with werewolves, defied demons, battled bests, Gilderoy's bewildering bravery never ceases to amaze in this magical masterpiece.[10]`,
    `The female Muggle communicated, via a machine called Telephone, the Muggle Crime Watchers Hotline, and immediately the Ministry of Magic Witch Watchers was informed. Minister Cornelius Fudge was taken by surprise and sent hundreds of Witch Watcher Special Forces to the Village, but when they arrived there he was gone. Minister was absolutely disappointed to lose Sirius Black. The situation got worse when hundreds of Dementors turned up making the small Dufftown population quiver in panic. It took more than 4 hours for the Special Force to tranquillise what was a great shock for those […]`,
    `Miss Granger, a plain but ambitious girl, seems to be developing a taste for famous wizards. Her latest prey, sources report, is none other than the Bulgarian Bonbon Viktor Krum. No word yet on how Harry Potter is taking this latest emotional blow.[18]`,
    `Sturgis Podmore, 38, of number two, Laburnum Gardens, Clapham, has appeared in front of the Wizengamot charged with trespass and attempted robbery at the Ministry of Magic on 31 August. Podmore was arrested by Ministry of Magic watchwizard Eric Munch, who found him attempting to force his way through a top-security door at one o'clock in the morning. Podmore, who refused to speak in his own defence, was convicted on both charges and sentence to six months in Azkaban.`,
]

// Add more breakings
function changeBreaking (or){
    const image = document.createElement("img")
    const breakingInfo = document.querySelector(".breaking__info")
    const span = document.createElement('span')
    const h2 =document.createElement('h2')
    
    image.classList ="breaking__img"
    breaking.prepend(image)
    image.src = `images/breaking/breaking${imgArray[or]}`

    breakingInfo.prepend(span)
    span.innerText = txtArray[or]
    span.prepend(h2)
    h2.innerText = span.innerText.substr(0,1)
}
changeBreaking(0)


// delete breakings
function deleteBreaking(){
    const image = document.querySelector(".breaking__img")
    const span = breaking.querySelector('span')
    image.remove()
    span.remove()
}




//Main left 'gentleman's fashion' button click event
const mainImage = document.querySelector('.mainNews__items')
const mainItems = document.querySelector('.mainItems')
console.log(mainImage)
mainItems.addEventListener('click',(e)=>{
    target = e.target.dataset.value
    console.log(target)
    const image = document.createElement('img')
    image.src = `images/${target}.png`
    image.classList= 'mainNews__left_img'
    deleteImg()
    mainImage.prepend(image)
})

//delete left img
function deleteImg (){
    const image = mainImage.querySelector('img')
    image.remove()
}