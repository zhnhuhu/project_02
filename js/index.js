window.addEventListener('load', function () {
    var focus = document.querySelector('.focus')
    var ul = focus.querySelector('ul');
    var lis = ul.querySelectorAll('li')
    var ol = document.querySelector('.circle')
    var next = document.querySelector('.arrow-r')
    var prev = document.querySelector('.arrow-l')
    var now = 0;
    var circle = 0;
    var timer;
    // 节流阀
    var flag = true;
    // 动态生成小圆圈
    for (var num = 0; num < lis.length; num++) {
        var li = document.createElement('li')
        // 记录当前的索引号，设置自定义属性
        li.setAttribute('index', num)
        ol.appendChild(li);
        li.addEventListener('click', function () {
            now = this.getAttribute('index')
            circle = this.getAttribute('index')
            for (var m = 0; m < ol.children.length; m++) {
                ol.children[m].className = '';
            }
            this.className = 'current'
            // console.log(this.getAttribute('index'));
            animate(ul, -721 * this.getAttribute('index'))
        })
    }
    // 第一个li设置类名current
    ol.children[0].className = 'current'
    focus.addEventListener('mouseenter', function () {
        next.style.display = 'block'
        prev.style.display = 'block'
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        next.style.display = 'none'
        prev.style.display = 'none'
        timer = setInterval(function () {
            next.click();
        }, 2000)
    })
    // 克隆第一个li放到ul最后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    next.addEventListener('click', function () {
        // 无缝滚动：把ul的第一个li复制一份，放到ul的最后面
        // 当图片滚动到克隆的最后一张图片时,让ul快速地不做动画地跑到最左侧
        // console.log(ul.children.length);
        if (flag == true) {
            flag = false;
            if (now == ul.children.length - 1) {
                ul.style.left = 0;
                now = 0;
            }
            now++;
            animate(ul, -721 * now, function () {
                flag = true;
            })
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    })
    prev.addEventListener('click', function () {
        if (flag == true) {
            flag = false;
            if (now == 0) {
                now = ul.children.length - 1;
                ul.style.left = -721 * now;
            }
            now--;
            animate(ul, -721 * now,function(){
                flag=true;
            })
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    })
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[circle].className = 'current'
    }
    var timer = this.setInterval(function () {
        next.click();
    }, 2000)
    // 节流阀:防止轮播图按钮连续点击造成播放过快
    // 核心思路:利用回调函数,添加一个变量来控制,锁住函数和解锁函数
})
