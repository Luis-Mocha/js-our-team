// Oggetto team

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];
console.log(team);

const cardDiv = document.createElement('div');
cardDiv.id = 'cardDiv';
cardDiv.classList.add('d-flex', 'flex-wrap', 'justify-content-between')
// 'd-flex', 'flex-wrap',
const main = document.querySelector('main');
main.append(cardDiv)

for (let key in team) {
    
    console.log(team[key])
    console.log(team[key].image);

    cardDiv.innerHTML += 
    `
    <div class="text-center team-card">
        <img src="./assets/img/${team[key].image}" class="img-fluid">
        <div class="team-card-body py-2">
            <h2>${team[key].name}</h2>
            <p class="fs-5">${team[key].role}</p>
        </div>
    </div>
    `
}