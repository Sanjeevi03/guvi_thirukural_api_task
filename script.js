let h1=document.createElement('h1')
h1.innerText='Thirukural | திருக்குறள்'
h1.setAttribute('id','title')
h1.classList.add("text-center",'my-2')
document.body.appendChild(h1)



let main=document.createElement('div')
main.classList.add("container")
document.body.appendChild(main)

let thiru=document.createElement('div')
let row_th=document.createElement('div')
row_th.classList.add('row','mt-4')
let col_th1=document.createElement('div')
col_th1.classList.add('text-center','col-sm-12','col-md-6','col-lg-6','col-xl-6','my-auto')
let img1=document.createElement('img')
img1.classList.add('img-fluid','icon')
img1.setAttribute('src','icon.jpeg')
col_th1.appendChild(img1)

let col_th2=document.createElement('div')
col_th2.classList.add('col-sm-12','col-md-6','col-lg-6','col-xl-6','my-3','p-3')
col_th2.innerHTML="<b>Thiruvalluvar | திருவள்ளுவர் </b><br>The Thirukkural, written by Thiruvalluvar, is a compendium of timeless ancient Tamil wisdom in as much as 140 words, which makes Thiruvalluvar the first Tweeter in the world. One of the most prominent literary works in Tamil, the Thirukkural has 1330 couplets and 133 chapters in total in almost every virtue of life."

row_th.appendChild(col_th1)
row_th.appendChild(col_th2)
thiru.appendChild(row_th)
main.appendChild(thiru)



// let l=[]
for(let i=0;i<1330;i++){
    // console.log(i);
    fetch(`https://api-thirukkural.vercel.app/api?num=${i}`)
    .then((d)=>d.json())
    .then((data)=>{
        // console.log(data);
    let row=document.createElement('div')
    row.classList.add('row')
    main.appendChild(row)
    
    let col=document.createElement('div')
    col.classList.add('col-sm-12','col-md-6','col-lg-6','col-xl-6','my-3')
    row.appendChild(col)
    //card 1
    let div_card=document.createElement('div')
    div_card.classList.add('card','h-100')
    col.appendChild(div_card)
    //card header 1
    let div_head=document.createElement('div')
    div_head.classList.add('card-header','text-center')
    let tit=document.createElement('h5')
    tit.classList.add('card-header',"tit")
    tit.innerHTML=`Kural No: ${data.number} ${data.sect_eng}`
    div_head.appendChild(tit)
    div_card.appendChild(div_head)

    // card body 1
    let div_body=document.createElement('div')
    div_body.classList.add('card-body','text-center')
    div_card.appendChild(div_body)
    let chap=document.createElement('h4')
    chap.classList.add('chap_name')
    chap.innerHTML=`${data.chap_eng}`
    div_body.appendChild(chap)
    //inside body text
    let d1=document.createElement('div')
    d1.classList.add('card-text')
    div_body.appendChild(d1)
    let div_1 = document.createElement('div')
    let t_kural=document.createElement('span')
    t_kural.classList.add('my-1')
    let t_exp=document.createElement('div')
    t_exp.classList.add('my-1')
    t_kural.innerHTML=`<span class="kural_tit">Kural:</span><br> `
    let con=document.createElement('div')
    con.classList.add("e_kural")
    con.innerHTML=(`${data.eng}`)
    t_kural.appendChild(con)
    t_exp.innerHTML='<span class="kural_exp">Explanation:</span><br>'
    let dd=document.createElement('div')
    dd.innerHTML=`${data.eng_exp}`
    t_exp.append(dd)
    div_1.appendChild(t_kural)
    div_1.appendChild(t_exp)

    d1.appendChild(div_1)


    //col2
    let col2=document.createElement('div')
    col2.classList.add('col-sm-12','col-md-6','col-lg-6','col-xl-6','my-3')
    row.appendChild(col2)
    //card 1
    let div_card2=document.createElement('div')
    div_card2.classList.add('card','h-100')
    col2.appendChild(div_card2)
    //card header 1
    let div_head2=document.createElement('div')
    div_head2.classList.add('card-header','text-center')
    let tit2=document.createElement('h5')
    tit2.classList.add('card-header','tit')
    tit2.innerHTML=`குறள் எண்: ${data.number} ${data.sect_tam} `
    div_head2.appendChild(tit2)
    div_card2.appendChild(div_head2)

    // card body 2
    let div_body2=document.createElement('div')
    div_body2.classList.add('card-body','text-center')
    div_card2.appendChild(div_body2)
    let chap2=document.createElement('h4')
    chap2.classList.add('chap_name')
    chap2.innerHTML=`${data.chap_tam}`
    div_body2.appendChild(chap2)
    //inside body text
    let d2=document.createElement('div')
    d2.classList.add('card-text')
    div_body2.appendChild(d2)
    let div_2 = document.createElement('div')
    let e_kural=document.createElement('span')
    let e_exp=document.createElement('div')
    e_kural.innerHTML=`<span class="kural_tit">குறள்:</span><br> `
    let con_2=document.createElement('div')
    con_2.classList.add('fw-bold')
    let l1=document.createElement('div')
    let l2=document.createElement('div')
    l1.innerHTML=(`${data.line1}`) 
    l2.innerHTML=(`${data.line2}`)
    con_2.appendChild(l1)
    con_2.appendChild(l2)
    e_kural.appendChild(con_2)
    e_exp.innerHTML='<span class="kural_exp">பொருள்:</span>'
    let dd2=document.createElement('div')
    dd2.innerHTML=`${data.tam_exp}`
    e_exp.append(dd2)
    div_2.appendChild(e_kural)
    div_2.appendChild(e_exp)

    d2.appendChild(div_2)
    

    

        
    })
    .catch((er)=>{
        console.log("Error");
    })
}

// console.log('l',l);

// let d2=document.createElement('div')
    // d2.classList.add('card-text')
    // div_body.appendChild(d2)
    // let div_2 = document.createElement('div')
    // div_2.innerHTML=`Capital: `

    // let d3=document.createElement('div')
    // d3.classList.add('card-text')
    // div_body.appendChild(d3)
    // let div_3 = document.createElement('div')
    // div_3.innerHTML=`Population:  `

    // d2.appendChild(div_2)
    // d3.appendChild(div_3)