/*let recipes = [];
let links = document.querySelectorAll('.show-btn a');
// get current meal link
for(i = 0; i < links.length; i++){
    links[i].addEventListener('click',function(e){
       let currentMealLink = e.target.text;
       getRecipes(currentMealLink);
    })
}


function getRecipes(meal){
    let myHttp = new XMLHttpRequest;
    myHttp.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    myHttp.send();

    myHttp.addEventListener('readystatechange',function(){
        if(myHttp.readyState == 4 && myHttp.status == 200){
            recipes = JSON.parse(myHttp.response).recipes;
            showMealData();
        }
    })
}
getRecipes('pizza');


function showMealData(){
    let cols = '';
    for(i = 0; i < recipes.length; i++){
        cols += `
            <div class="col-lg-3 col-md-6">
                <div class="meals my-4">
                    <div class="meals-img position-relative">
                        <a href = '${recipes[i].source_url}' target = '_blank'>
                            <img class="w-100 rounded-2" src="${recipes[i].image_url}" alt="">
                        </a>
                        <p>${recipes[i].social_rank.toFixed(0)}%</p>
                    </div>
                    <div class="meals-content mt-3">
                        <h4>${recipes[i].title}</h4>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('rowData').innerHTML = cols;
}
*/


let recipesContainer = [];
let links = document.querySelectorAll('.show-btn a');

for( i = 0; i < links.length; i++){
    links[i].addEventListener('click', (e)=> {
        let currentMealLink = e.target.text;
        getMealData(currentMealLink);
    })
}

async function getMealData(meal){
    let getData = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    let respons = await getData.json();
    recipesContainer = respons.recipes;
    showMealData();
}
getMealData('pizza')

function showMealData(){
    let cols ='';
    for(i=0; i< recipesContainer.length; i++){
        cols += `
        <div class="col-lg-3 col-md-6">
                <div class="meals my-4">
                    <div class="meals-img position-relative">
                        <a href = '${recipesContainer[i].source_url}' target = '_blank'>
                            <img class="w-100 rounded-2" src="${recipesContainer[i].image_url}" alt="">
                        </a>
                        <p>${recipesContainer[i].social_rank}%</p>
                    </div>
                    <div class="meals-content mt-3">
                        <h4>${recipesContainer[i].title}</h4>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('rowData').innerHTML=cols;
}