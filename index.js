let heroes = [
  { 'name': 'Prof. Xavier', 'twitter': '@profx', 'pic': 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0004.gif' },
  { 'name': 'Spiderman', 'twitter': '@spidey', 'pic': 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif' },
  { 'name': 'Wolverine', 'pic': 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0011.gif', 'twitter': '@logan' }
];

let moreHeroes = [
  { 'name': 'Cyclops', 'twitter': '@oneye', 'pic': 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0005.gif' },
  { 'name': 'Storm', 'twitter': '@rainsitpours', 'pic': 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0007.gif' },
  { 'name': 'Phoenix', 'twitter': '@jeangrey', 'pic': 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0016.gif' }
];
/**
 * On click,
 * an object which is taken from mapped array of two arrays above,
 * It returns the ready HTML,
 * is put into the render snippet fction.
 * which is then appended to main.
 */
function mapArray(arr) {
  let snippet = Array.from(arr.map(obj => `
    <article class='dt w-100 bb b--black-05 pb2 mt2'>
        <div class='dtc w2 w3-ns v-mid'>
            <img src='${obj.pic}' alt='Image of ${obj.name}' class='ba b--black-10 db br-100 w2 w3-ns h2 h3-ns'/>
        </div>
        <div class='dtc v-mid pl3'>
            <h1 class='f6 f5-ns fw6 lh-title black mv0'>${obj.name}</h1>
            <h2 class='f6 fw4 mt0 mb0 black-60'>${obj.twitter}</h2>
        </div>
        <div class='dtc v-mid'>
            <form class='w-100 tr'>
                <button class='following' class='f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60' type='submit'>+ Follow</button>
            </form>
        </div>
    </article>
`));
  return snippet;
};

let snippet = mapArray(heroes);
for (let i = 0; i < heroes.length; i++) {
  document.querySelector('main').insertAdjacentHTML('beforeend', snippet[i]);
  updateEventListeners(heroes[i]);
}

// Jest to array a nie string. Dlatego problem xD Ale jednoczesnie dobrze bo ma byc array.
snippet = mapArray(moreHeroes);
function* idMaker() {
  let index = 0;
  while (index < moreHeroes.length)
    yield index++;
}
let gen = idMaker();


let sound_add_hero = document.querySelector('#sound-add-new-hero');
let sound_follow = document.querySelector('#sound-follow');
let sound_unfollow = document.querySelector('#sound-unfollow');

//Show new hero;
document.querySelector('a').addEventListener('click', function () {
  let index = gen.next().value;
  index < 6 ? document.querySelector('main').insertAdjacentHTML('beforeend', snippet[index]) : console.warn('Out of heroes');
  /*                              Finding this ^^^^^^^^^^^^^ function took SOOOOOOO LONG*/
  sound_add_hero.pause();
  sound_add_hero.play();
  updateEventListeners(moreHeroes[index]);
});

function updateEventListeners(hero) {
  let followButtons = document.querySelectorAll('button.following');

  for (let i = 0; i < followButtons.length; i++) {
    if (!followButtons[i].classList.contains('has-event-listener')) {
      let followButton = followButtons[i];

      followButton.className += 'has-event-listener';
      followButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (followButton.textContent == '+ Follow') {
          followButton.textContent = 'Following';
          console.info(`following ${hero.name}`);
          sound_follow.pause();
          sound_follow.play();
        }
        else {
          followButton.textContent = '+ Follow';
          console.info(`unfollowing ${hero.name}`);
          sound_unfollow.pause();          
          sound_unfollow.play();
        }
      });
    }
  };
};
