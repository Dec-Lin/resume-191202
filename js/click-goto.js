!function () {
    var view = View('nav.menu')
    var controller = {
        view: null,
        aTags: null,
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function (element) {

            let top = element.offsetTop //获取 element 的 Top
            let currentTop = window.scrollY //获取 window 的 Top
            let targetTop = top - 80  // 获取 要去目的 Top
            let s = targetTop - currentTop  //路程
            const coords = { y: currentTop } //起始位置
            let t = Math.abs((s / 100) * 300) //时间
            if (t > 500) { t = 500 } // 如果时间大于了500，就等于500

            //调用 TWEEN.js
            const tween = new TWEEN.Tween(coords)  //起始位置
                .to({ y: targetTop }, 1000)   //结束位置和时间
                .easing(TWEEN.Easing.Quadratic.InOut)  //缓动类型
                .onUpdate(() => {
                    window.scrollTo(0, coords.y)  //如何更新界面
                })
                .start() //开始缓动
        },
        bindEvents: function () {
            let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (x) => {
                    x.preventDefault() //阻止a标签的默认动作
                    let a = x.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                }
            }
        },
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvents()
        }
    }
    controller.init(view)
}.call()