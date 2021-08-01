const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
fetch(url)
    .then(res => res.json())
    .then(data => displayMealPicWithName(data))


const displayMealPicWithName = (meals) => {

    const [...allMeal] = meals.categories;

    const allMealContainerDiv = document.getElementById('allMealContainer');
    // const singleDiv = document.createElement('div');
    // singleDiv.className = 'singleDiv';

    allMeal.forEach(meal => {
        const singleDiv = document.createElement('div');

        const mealInfo = `
        <div onClick ="displayDetails('${meal.strCategory}')" class="card" style="width: 18rem;">
        <img src="${meal.strCategoryThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${meal.strCategory}</p>
        </div>
      </div>
        `
        // console.log(meal.strCategory);
        singleDiv.innerHTML = mealInfo;
        allMealContainerDiv.appendChild(singleDiv);
     
    });
}



const displayDetails = (mealName) =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayInstruction(data))
    // console.log(url);
}

const displayInstruction =(meal) =>
{
  const [...need] = meal.meals;
  console.log(need[0]);

  const allMealContainerDiv = document.getElementById('allMealContainer');
  allMealContainerDiv.style.display = 'none';

  const searchByMealContainerDiv = document.getElementById('searchByMealContainer');
  searchByMealContainerDiv.style.display = 'none';
  
  const instructionContainerDiv = document.getElementById('instructionContainer');
  const singleDiv = document.createElement('div');

  const instructionInfo = `
              <img class='img-fluid rounded mx-auto d-block foodImg' src="${need[0].strMealThumb}">
              <h2 class='text-center'>${need[0].strMeal}</h2>  
              <h4>Ingridients List</h4>
              <ul>
                  <li>${need[0].strIngredient1}</li>
                  <li>${need[0].strIngredient2}</li>
                  <li>${need[0].strIngredient3}</li>
                  <li>${need[0].strIngredient4}</li>
                  <li>${need[0].strIngredient5}</li>
                  <li>${need[0].strIngredient6}</li>
                  <li>${need[0].strIngredient7}</li>
                  <li>${need[0].strIngredient8}</li>
                 
              <ul>
              <h4>How To make</h4>
              <p class ='text-center'>${need[0].strInstructions}</p>
  `;

  singleDiv.innerHTML = instructionInfo;
  instructionContainerDiv.appendChild(singleDiv);

}

const searchByMealName = () =>
{
    const searchText = document.getElementById('searchText').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchByMealName(data));
    // console.log(url);
}

const displaySearchByMealName = (meals) =>
{
  const allMealContainerDiv = document.getElementById('allMealContainer');
  allMealContainerDiv.style.display = 'none';

  const searchByMealContainerDiv = document.getElementById('searchByMealContainer');

  const[...allMeal] = meals.meals;
  // console.log(allMeal);

  allMeal.forEach(meal => {

    const singleDiv = document.createElement('div');

    const mealInfo = `
    <div onClick ="displayDetails('${meal.strMeal}')" class="card" style="width: 18rem;">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${meal.strMeal}</p>
    </div>
  </div>
    `
    // console.log(meal.strCategory);
    singleDiv.innerHTML = mealInfo;
    searchByMealContainerDiv.appendChild(singleDiv);

  });
}