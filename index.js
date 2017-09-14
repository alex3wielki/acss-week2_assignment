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
function render(obj){
    let snippet = `
    <article class="dt w-100 bb b--black-05 pb2 mt2">
        <div class="dtc w2 w3-ns v-mid">
            <img src="${obj.pic}" alt="Image of ${obj.name}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div class="dtc v-mid pl3">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">${obj.name}</h1>
            <h2 class="f6 fw4 mt0 mb0 black-60">@yg</h2>
        </div>
        <div class="dtc v-mid">
            <form class="w-100 tr">
                <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
            </form>
        </div>
    </article>
    `;
    return snippet;
}
let hero = render(heroes[0]);
console.log(ziemniak);
//testing ssh