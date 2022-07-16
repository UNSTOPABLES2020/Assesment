fetch('https://fakestoreapi.com/products').then((data)=>{

    //console.log(data);
    return data.json();
    
}).then((completetheproject)=>{

  /*  console.log(completetheproject[2].title);
    document.getElementById('root').
    innerHTML=completetheproject[2].title;*/
    let data1="";
    completetheproject.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">
            ${values.title}
        </h1>
        <img  class="img" src=${values.image} alt="img">
        <p>
            ${values.description}
        </p>
        <p class="category">
          ${values.category}
        </p>
        <p class="price">
            ${values.price}
        </p>
    </div>`;
    });
    document.getElementById("cards").innerHTML=data1;

}).catch((error)=>{
    console.log(error);
})
