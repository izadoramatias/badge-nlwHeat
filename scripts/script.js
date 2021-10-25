
const linksSocialMedias = {
  github: "izadoramatias",
  youtube: "jakelinygracielly",
  facebook: "me.matiasx",
  instagram: "_izadora.matias",
  twitter: "jakelinytec"
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedias[social]}`

  }
}

function getGitHubUserInfos(){
  const url = `https://api.github.com/users/${linksSocialMedias.github}`;

  fetch(url).then(response => response.json()).then(data => {

    userName.textContent = data.name;
    userProfile.href = data.html_url;
    userBio.textContent = data.bio;
    userImage.src = data.avatar_url;
    userLogin.textContent = data.login;

  });

}

function addSpanFaixaWhenWidth420(){
  const span = document.querySelector("#faixa");
  const elementToRemove = document.querySelector('img.imgFaixa')
  const widthScreen = window.screen.width;

  if (widthScreen <= 460){
    elementToRemove.parentNode.removeChild(elementToRemove)
  }else{
    elementToRemove.parentNode.prepend(elementToRemove)
  }

}

VanillaTilt.init(document.querySelector("main"), {
		max: 25,
		speed: 400,
    glare: true
	});

// chamadas das funções
changeSocialMediaLinks();
getGitHubUserInfos();
addSpanFaixaWhenWidth420()


// background squares
const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++){
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);


  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  
  li.style.left = `${position}%`;
  
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;

  ulSquares.appendChild(li);
}
