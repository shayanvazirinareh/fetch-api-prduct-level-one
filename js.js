fetch('https://fakestoreapi.com/products/')
.then((res)=>{
    return res.json();
}).then((complate)=>{
    console.log(complate);
    let save='';
    complate.map((data,index)=>{
        save=`<div class='style'>
        <h3>${complate[0].title}</h3>
        <img width='40%' src='${complate[0].image}'>
        <p>${complate[0].price}</p>
        <hr>

        <h3>${complate[1].title}</h3>
        <img width='40%' src='${complate[1].image}'>
        <p>${complate[1].price}</p>
        <hr>

        <h3>${complate[2].title}</h3>
        <img width='40%' src='${complate[2].image}'>
        <p>${complate[2].price}</p>
        <hr>

        <h3>${complate[3].title}</h3>
        <img width='40%' src='${complate[3].image}'>
        <p>${complate[3].price}</p>
        <hr>
        
        <h3>${complate[4].title}</h3>
        <img width='40%' src='${complate[4].image}'>
        <p>${complate[4].price}</p>
        <hr>
        
        <h3>${complate[5].title}</h3>
        <img width='40%' src='${complate[5].image}'>
        <p>${complate[5].price}</p>
        <hr>

        <h3>${complate[6].title}</h3>
        <img width='40%' src='${complate[6].image}'>
        <p>${complate[6].price}</p>
        <hr>

        <h3>${complate[7].title}</h3>
        <img width='40%' src='${complate[7].image}'>
        <p>${complate[7].price}</p>
        <hr>
        
        <h3>${complate[8].title}</h3>
        <img width='40%' src='${complate[8].image}'>
        <p>${complate[8].price}</p>
        <hr>
        
        <h3>${complate[9].title}</h3>
        <img width='40%' src='${complate[9].image}'>
        <p>${complate[9].price}</p>
        <hr>
        
        <h3>${complate[10].title}</h3>
        <img width='40%' src='${complate[10].image}'>
        <p>${complate[10].price}</p>
        <hr>
        
        <h3>${complate[11].title}</h3>
        <img width='40%' src='${complate[11].image}'>
        <p>${complate[11].price}</p>
        <hr>
        </div>`
    })
    document.querySelector(".root").innerHTML=save;
})