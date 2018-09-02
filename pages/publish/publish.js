Page({
  data: {
    list: [
      {
        id: 'view',
        name: '企业服务',
        open: false,
        pages: ['劳务派遣', '人事代理', '劳务外包','代理记账','公司审计','公司变更','公司注册','公司注销','税务解非','工商解异常','吊销转注销']
      }, {
        id: 'content',
        name: '保险服务',
        open: false,
        pages: ['雇主责任险', '单工伤', '五险一金代缴']
      }, {
        id: 'form',
        name: '教育培训',
        open: false,
        pages: ['技能培训', '职业培训']
      }, {
        id: 'nav',
        name: '求职招聘',
        open: false,
        pages: ['求职招聘']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

