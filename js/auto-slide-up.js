!function () {
    //找到所有需要自动往上滚动的标签，给它们添加 offset 类
    let specialTags = document.querySelectorAll('[date-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    //找到离用户视线最近的移除 offset 类
    findClosestAndRemoveOffset()

    //用户滚动窗口之后，找到新的最近的移除 offset 类
    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset()
    })





    /*helper*/


    //页面滚动自动高亮a标签。minIndex就是离窗口顶部最近的元素。
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[date-x]')
        let minIndex = 0
        for (let i = 0; i < specialTags.length; i++) {
            if (Math.abs((specialTags[i]).offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brothersAndMe = li.parentNode.children
        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }


    //topNavBar子菜单
    liTags = document.querySelectorAll('nav.menu > ul > li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active')
        }
    }
}.call()
