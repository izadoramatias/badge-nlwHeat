
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



// chamadas das funções
changeSocialMediaLinks();
getGitHubUserInfos()