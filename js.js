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

// for active link
const ils = document.querySelectorAll('.show-btn a');
ils.forEach(el =>{
    el.addEventListener('click',()=>{
        ils.forEach(el =>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    })
})