!function () {
    var view = View('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) { //页面在垂直方向已经滚动的距离
                    this.active()
                } else {
                    this.deactivate()
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactivate: function () {
            this.view.classList.remove('sticky')
        }

    }
    controller.init(view)
}.call()