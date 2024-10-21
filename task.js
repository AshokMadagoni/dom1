function card(){
    let card1=document.getElementsByClassName("cards");
    let colors=["pink","gray","lightgreen","purple","orange","lightblue","aqua","yellow","lightgreen","purple"]
    let images=["https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg","https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg","https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80","https://thumbs.dreamstime.com/b/image-shows-human-brain-glowing-network-connections-divided-two-hemispheres-left-right-hemisphere-325133493.jpg","https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg","https://thumbs.dreamstime.com/b/falling-drop-rain-blue-earth-image-water-splash-crown-shape-water-splash-crown-shape-falling-drop-earth-140453719.jpg","https://www.shutterstock.com/shutterstock/photos/2198245029/display_1500/stock-photo-autumn-nature-landscape-lake-bridge-in-fall-forest-path-way-in-gold-woods-romantic-view-image-2198245029.jpg","https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2455/1717523662455-i","https://kawasaki-india.com/wp-content/uploads/2018/04/H2R-removebg-preview-1.png","https://imgd.aeplcdn.com/1056x594/n/cw/ec/49656/continental-gt-right-side-view-12.png?isig=0&q=80"]
    for( let i=0;i<card1.length;i++){
        setTimeout(function(){
            card1[i].innerHTML=`<div id="div${i}"><h1>this is card ${i+1}</h1>
            <div><img src="${images[i]}" width="200px" height="150px"></div>
            <button id="btn${i}" >buy now</button></div>`
            let color=document.getElementById(`div${i}`)
            color.style.backgroundColor=colors[i]
            color.style.width="300px"
            color.style.border="2px solid black"
            color.style.margin="20px"
            color.style.textAlign="Center"
            card1[i].style.display="inline-block"
            let button=document.getElementById(`btn${i}`)
            button.style.width="100px"
            button.style.backgroundColor="green"
        },i*1000)
    }
}