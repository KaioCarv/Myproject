function toggleMode(){
  const html = document.documentElement
    html.classList.toggle('light')
    // pegar a tag img
    const img= document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src" ,"./assets/avatar.png")
  } else {
// set tiver  sem light mode, manter a imagem normal
img.setAttribute("src", "./assets/avatarkaio.png")
  }

  if(html.classList.contains('light')){
    // se tiver light mode, adicionar a alt light
    alt.setAttribute("kaio com foto de perfil com ceu e arvores de fundo.")
  } else {
// set tiver  sem light mode, manter oo alt normal
alt.setAttribute("Foto de Kaio de carvalho de paisagem, de casaco cinza e funda de uma pizzaria.")
  }


}