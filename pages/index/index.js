// pages/index/index.js
var app = getApp();
Page({
  data: {
    imgUrls: [
      {
        "id":1,
        "name":"image1",
        "pic_url":'../../images/image1.jpg'
      },
      {
        "id": 2,
        "name": "image2",
        "pic_url": '../../images/image2.jpg'
      },
      {
        "id": 3,
        "name": "image3",
        "pic_url": '../../images/image3.jpg'
      }
    ],
    pic1: [
      {
        "id": 1,
        "name": '企业服务',
        "pic": '../../images/serPic1.png',
      },
      {
        "id": 2,
        "name": '保险服务',
        "pic": '../../images/serPic2.png',
      },
      {
        "id": 3,
        "name": '家政服务',
        "pic": '../../images/serPic3.png',
      },
      {
        "id": 4,
        "name": '交易服务',
        "pic": '../../images/serPic4.png',
      },
    ],
    pic2:[
      {
        "id": 5,
        "name": '教育培训',
        "pic": '../../images/serPic5.png',
      },
      {
        "id": 6,
        "name": '求职招聘',
        "pic": '../../images/serPic6.png'
      },
      {
        "id": 7,
        "name": '信息发布',
        "pic": '../../images/serPic7.png'
      },
      {
        "id": 8,
        "name": '广告咨询',
        "pic": '../../images/serPic8.png'
      },
    ],
    pages: [
      {
        id: '1',
        name: '企业服务',
        url: '/pages/companyService/companyService'
      },
      {
        id: '2',
        name: '保险服务',
        url: '/pages/insuranceService/insuranceService'
      }
    ],
    funnypic:[
      {
        id:1,
        title:'image1',
        pic_url:'/images/image1'
      },
      {
        id:2,
        title:'image2',
        pic_url:'/images/image2'
      }
    ]
  },
  onShareAppMessage: function () {
    return {
      success: function (res) {
        // 分享成功
        console.log(res);
      },
      fail: function (res) {
        // 分享失败
        console.log(res);
      }
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
        console.log('session 未过期');
        app.getUserInfo();
      },
      fail: function () {
        //登录态过期
        app.getUserInfo();
      }
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var that = this;
    // request.getBanner(
    //   { "session_id": app.globalData.session_id },
    //   (res) => {
    //     console.log(res);
    //     that.setData({
    //       imgUrls: res.data
    //     })
    //   },
    // );
    // request.getQupic(
    //   { "session_id": app.globalData.session_id },
    //   (res) => {
    //     console.log(res+"0000000000000000000");
    //     that.setData({
    //       funnyPic: res.data
    //     })
    //   },
    // )
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  goDetail: function (e) {
    wx.navigateTo({
      url: this.data.pages[e.currentTarget.dataset.id-1].url
      //url: '/pages/companyService/companyService'
    })
  },
  goBanner: function (e) {
    console.log(e.target.dataset.id);
    wx.navigateTo({
      url: this.data.pages[e.currentTarget.dataset.id - 1].url
      //url: '../adDetail/adDetail?id=' + e.currentTarget.dataset.id
    })
  }
})