
let navBar = document.querySelector('.navBar');
let videosImg = document.querySelector('.videos-shorts');
let btn = document.querySelector('.header .first i.fa-bars');

let leftMiniMenu = document.querySelector('.container .leftMiniMenu');

// btn.onclick = () => {
//     leftMiniMenu.style.display = 'block';
// }

let navArray = ['Live','Programming','FC Barcelona','Test Drivers','Podcast','Al Ahly SC','Editing','GoalKeepers','Recently Uploaded','Watched'
,'Editng','Histroy','Podcasts','Test Drives','Gaming','humans','Films','Tv Show'];



let imgArray = [`${src="cake.png"}`,'help.png','Histroy.png','Work.png','cake.png','cake.png','cake.png']

// for (let j = 0; j < imgArray.length; j++) {
//     let imgdiv = document.createElement('div');
//     let data = `
//     <img src='${imgArray[j]}'>
//     `;
//     imgdiv.appendChild(data)
//     videosImg.appendChild(imgdiv)
// }



for (let i = 0; i < navArray.length; i++) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let text = document.createTextNode(navArray[i]);
    span.appendChild(text);
    div.appendChild(span);
    navBar.appendChild(div);
}





