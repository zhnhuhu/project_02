window.addEventListener('load',function(){
    var preview=document.querySelector('.preview')
    var mask=document.querySelector('.mask')
    var big=document.querySelector('.big')
    var picture=document.querySelector('.picture')
    var img=big.querySelector('img')
    var smallImg=preview.querySelector('.bigtu')
    // 1.显示与隐藏
    preview.addEventListener('mouseover',function(e){
        
        mask.style.display='block'
        big.style.display='block'
    })
    preview.addEventListener('mouseout',function(){
        mask.style.display='none'
        big.style.display='none'
    })
    preview.addEventListener('mousemove',function(e){
        x=e.pageX-150-picture.offsetLeft;
        x=x>0?x:0;
        x=x>smallImg.offsetWidth-mask.offsetWidth?smallImg.offsetWidth-mask.offsetWidth:x
        y=e.pageY-150-picture.offsetTop;
        y=y>0?y:0
        // console.log(smallImg.offsetHeight);
        y=y>smallImg.offsetHeight-mask.offsetHeight?smallImg.offsetHeight-mask.offsetHeight:y
        // console.log(x,y);
        // console.log(mask.offsetLeft,mask.offsetTop);        
        // console.log(picture.offsetLeft,picture.offsetTop);        
        mask.style.left=x+'px'
        mask.style.top=y+'px'
        // console.log(img.offsetWidth,mask.offsetWidth);
        // var n=300/150
        var n=(img.offsetWidth-big.offsetWidth)/(smallImg.offsetWidth-mask.offsetWidth)
        // 遮挡层的最大移动距离/大图片的最大移动距离
        xx=-mask.offsetLeft*n
        yy=-mask.offsetTop*n
        img.style.left=xx+'px'
        img.style.top=yy+'px'
    })
})