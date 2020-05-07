function myfunction() {
// 40 random number for 40 div id 
    var arr = [];
    while (arr.length < 40) {
        var r = Math.floor(Math.random() * 40) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);


    }
// create 8*5 div
    var divmain1 = document.createElement("div");
    divmain1.style = "display: flex; height: 120px;align-items: center; width:100%;justify-content: center;"
    for (i = 0; i <= 7; i++) {
        var div = document.createElement("div");
        div.style = "display: flex; height: 120px;align-items: center; width :150px;justify-content: center; border: solid black 2px;"
        var imgage = document.createElement("img");
        imgage.id = arr[i];
        imgage.style = "height: 120px; width :150px;"
        imgage.src = "https://www.itl.cat/pngfile/big/40-407668_ultra-hd-plain-pink-4k-backgrounds-plain-pink.jpg"
        imgage.setAttribute("onclick", "game(" + arr[i] + ")")
        div.appendChild(imgage)
        divmain1.appendChild(div)
    }
    document.body.appendChild(divmain1)
    var divmain2 = document.createElement("div");
    divmain2.style = "display: flex; height: 120px;align-items: center; width:100%;justify-content: center;"
    for (i = 8; i <= 15; i++) {
        var div = document.createElement("div");
        // div.id = arr[i];
        div.style = "display: flex; height: 120px;align-items: center; width :150px;justify-content: center; border: solid black 2px;"
        var imgage = document.createElement("img");
        imgage.id = arr[i];
        imgage.style = "height: 120px; width :150px;"
        imgage.src = "https://www.itl.cat/pngfile/big/40-407668_ultra-hd-plain-pink-4k-backgrounds-plain-pink.jpg"
        imgage.setAttribute("onclick", "game(" + arr[i] + ")")
        div.appendChild(imgage)
        divmain2.appendChild(div)
    }
    document.body.appendChild(divmain2)
    var divmain3 = document.createElement("div");
    divmain3.style = "display: flex; height: 120px;align-items: center; width:100%;justify-content: center;"
    for (i = 16; i <= 23; i++) {
        var div = document.createElement("div");
        //div.id = arr[i];
        div.style = "display: flex; height: 120px;align-items: center; width :150px;justify-content: center; border: solid black 2px;"
        var imgage = document.createElement("img");
        imgage.id = arr[i];
        imgage.style = "height: 120px; width :150px;"
        imgage.src = "https://www.itl.cat/pngfile/big/40-407668_ultra-hd-plain-pink-4k-backgrounds-plain-pink.jpg"
        imgage.setAttribute("onclick", "game(" + arr[i] + ")")
        div.appendChild(imgage)
        divmain3.appendChild(div)
    }
    document.body.appendChild(divmain3)

    var divmain4 = document.createElement("div");
    divmain4.style = "display: flex; height: 120px;align-items: center; width:100%;justify-content: center;"
    for (i = 24; i <= 31; i++) {
        var div = document.createElement("div");
        //div.id = arr[i];
        div.style = "display: flex; height: 120px;align-items: center; width :150px;justify-content: center; border: solid black 2px;"
        var imgage = document.createElement("img");
        imgage.id = arr[i];
        imgage.style = "height: 120px; width :150px;"
        imgage.src = "https://www.itl.cat/pngfile/big/40-407668_ultra-hd-plain-pink-4k-backgrounds-plain-pink.jpg"
        imgage.setAttribute("onclick", "game(" + arr[i] + ")")
        div.appendChild(imgage)
        divmain4.appendChild(div)
    }
    document.body.appendChild(divmain4)

    var divmain5 = document.createElement("div");
    divmain5.style = "display: flex; height: 120px;align-items: center; width:100%;justify-content: center;"
    for (i = 32; i <= 39; i++) {
        var div = document.createElement("div");
        //div.id = arr[i];
        div.style = "display: flex; height: 120px;align-items: center; width :150px;justify-content: center; border: solid black 2px;"
        var imgage = document.createElement("img");
        imgage.id = arr[i];
        imgage.style = "height: 120px; width :150px;"
        imgage.src = "https://www.itl.cat/pngfile/big/40-407668_ultra-hd-plain-pink-4k-backgrounds-plain-pink.jpg"
        imgage.setAttribute("onclick", "game(" + arr[i] + ")")
        div.appendChild(imgage)
        divmain5.appendChild(div)
    }
    document.body.appendChild(divmain5)


}
var clickCount = 0; //each click on div increase the count
// image array
var ImgArr = ['https://images.pexels.com/photos/634613/pexels-photo-634613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/64221/flower-sunflower-karnataka-india-64221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/33787/chimpanzee-sitting-sad-mammal.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/132468/pexels-photo-132468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/60644/nile-crocodile-crocodylus-niloticus-zoo-60644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/70080/elephant-africa-african-elephant-kenya-70080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/45910/goldfish-carassius-fish-golden-45910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/76957/tree-frog-frog-red-eyed-amphibian-76957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/70080/elephant-africa-african-elephant-kenya-70080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/45910/goldfish-carassius-fish-golden-45910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/76957/tree-frog-frog-red-eyed-amphibian-76957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/60644/nile-crocodile-crocodylus-niloticus-zoo-60644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/634613/pexels-photo-634613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/64221/flower-sunflower-karnataka-india-64221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/132468/pexels-photo-132468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/33787/chimpanzee-sitting-sad-mammal.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
]

var idArr = []
// function to replace inage on click
function game(a) {
    //document.getElementById(a).style.transform = "rotateY(180deg)"; 
    document.getElementById(a).src = ImgArr[a - 1]
    idArr.push(a)
    document.getElementById(a).setAttribute('onclick', 'false')
    clickCount += 1;
    setTimeout(function () {
        checkImg()
    }, 1500)
}
//  function to check both images are same or not
function checkImg() {
    if (clickCount % 2 == 0) {
        var x = idArr[clickCount - 1]
        var y = idArr[clickCount - 2]
        var str1 = document.getElementById(x).src
        var str2 = document.getElementById(y).src
        var n = str1.localeCompare(str2);
        if (n != 0) {
            document.getElementById(x).src = "https://www.itl.cat/pngfile/big/40-407668_ultra-hd-plain-pink-4k-backgrounds-plain-pink.jpg"
            document.getElementById(x).setAttribute('onclick', "game(" + x + ")")
            document.getElementById(y).src = "https://www.itl.cat/pngfile/big/40-407668_ultra-hd-plain-pink-4k-backgrounds-plain-pink.jpg"
            document.getElementById(y).setAttribute('onclick', "game(" + y + ")")
        }
    }
}