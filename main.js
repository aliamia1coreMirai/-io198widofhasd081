let pg = 0
let nav = document.querySelector("nav")
let tap_btn = document.getElementById("tap_btn")
let main_p = document.getElementById("main_page")
let audio = document.querySelector(".audio1")
let ms = document.querySelector(".sv")
let header = document.querySelector("header")
let airdrop_page = document.getElementById("airdrop_page")
let xia_page = document.getElementById("xia_page")
let summ = 0

document.body.onclick = ev => {
    document.querySelector(".sv").click()
    document.body.onclick = null
}


header.onclick = ev => {
    if(ev.target.classList.item(0) === "sv"){
        audio.volume = 0.2
        if(ev.target.classList.item(1) === "off"){
            audio.pause()
            ms.classList.remove("off")    
            return
        }
        audio.play()
        ms.classList.add("off")
        return 
    }
}


main_p.onclick = ev => {
    let {x,y} = ev
    
    let el = document.createElement("div")
    el.textContent = "+1"
    el.classList.add("bo")
    el.style.left = `${x}px`
    el.style.top = `${y}px`

    setTimeout(() => {
        el.style.transform = 'translateY(-50px)'; 
    }, 0);

    setTimeout(() => {
        el.style.transform += 'translateY(250px)';
    }, 500); 

    setTimeout(()=>{
        el.remove()
    },1001)

    main_p.append(el)
    summ++
    document.querySelector(".big_text").textContent = summ
}

document.querySelector(".big_text").onclick = () => {
    document.querySelector(".audio2").play()
}



nav.onclick = ev => {
    document.querySelectorAll(".true").forEach(el => el.classList.remove("true"))
    if(ev.target.closest(".cont_o")){
        pg=0
        pageRender()
        return document.querySelector(".o").classList.add("true")  
    }
    if(ev.target.closest(".cont_t")){
        pg=1
        pageRender()
        return document.querySelector(".t").classList.add("true")
    }
    if(ev.target.closest(".cont_f")){
        pg=2
        pageRender()
        return document.querySelector(".f").classList.add("true")
    }
}


window.onload = e => {
    pageRender()
    document.querySelector(".o").classList.add("true")
}

document.querySelector("form").onsubmit = ev => {
    rendTable(ev)
}


function rendTable(ev) {
    ev.preventDefault()

    // let block = document.querySelector(".ip_block")
    // fetch("http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,mobile,proxy,query")
    // .then(res => res.json())
    // .then(obj => Object.entries(obj).forEach( els => {
    //     let el = document.createElement("div")
    //     if(els[0] === "query"){

    //     }
    //     el.textContent = `${els[0] === "query"? "ip": els[0]}:   ${els[1]}`
    //     el.classList.add("nt")
    //     block.append(el)
    // }))

    ev.target.onsubmit = null
}  



function pageRender() {
    document.querySelectorAll(".block").forEach( el => el.classList.remove("block"))
    switch(pg){ 
        case 0: 
            main_p.classList.add("block")
        break;
        
        case 1:
            airdrop_page.classList.add("block")
        break;

        case 2:
            xia_page.classList.add("block")
            let aud = document.querySelector(".audio3")   
            aud.play()
            aud.volume = 0.1
        break;
    }
}

