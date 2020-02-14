let url='https://swapi.co/api/people'



function data(i){
  
fetch(url)
.then(response=>response.json())
.then(response=>{
  console.log(response)
  let main=document.querySelector('.content')
 
    let html=`<ul><li>Name : ${response.results[i].name}</li>
    <li>Height : ${response.results[i].height}</li>
                 <li> Mass : ${response.results[i].mass}</li>
                  <li>Hair Colour : ${response.results[i].hair_color}</li>    
                  <li>Skin Colour : ${response.results[i].skin_color}</li>
                  <li>Eye Colour : ${response.results[i].eye_color}</li>
                  <li>Birth year : ${response.results[i].birth_year}</li>
                  <li>Gender : ${response.results[i].gender}</li> 
</ul>`
main.innerHTML=html;
 

})

}