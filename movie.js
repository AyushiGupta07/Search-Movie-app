const APIURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//Most popular movies
const IMGPATH="https://image.tmdb.org/t/p/w1280";
const SEARCHAPI= "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// Movies which you have search

const main=document.getElementById('main1');
const search=document.getElementById('search');


const getMovies= async(api)=>{


    const response=await fetch(api);
    const data= await response.json();
    // console.log(data.results);
    showMovies(data.results);

    
}

   const showMovies=(data)=>{ 
    data.forEach(element => {
        console.log(element);


    const ele=document.createElement('div');
    const image=document.createElement('img');
    const text=document.createElement('h2');
 
    text.innerHTML=`${element.title}`;
    image.src= IMGPATH + element.poster_path;
    ele.appendChild(image);
    ele.appendChild(text);
    main.appendChild(ele);
    
});



  

   }

   getMovies(APIURL);
search.addEventListener("keyup",
function(event){
    if(event.target.value!=""){
        main.innerHTML="";
        getMovies(SEARCHAPI + event.target.value);
    }
})



    



