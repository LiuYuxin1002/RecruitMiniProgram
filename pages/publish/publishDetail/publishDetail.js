// pages/publish/publish.js
//var request = require('../../utils/request.js');
var app = getApp();
var tid, aid, area, money, descript, phone, pic = 0;
Page({
  data: {

  },
  //分享功能的实现
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

  // previewImage: function (e) {
  //   var current = e.target.dataset.src

  //   wx.previewImage({
  //     current: current,
  //     urls: this.data.imageList
  //   })
  // }







  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 获取类目列表
    var that = this;
    // request.getType(
    //   { "session_id": app.globalData.session_id },
    //   (res) => {
    //     console.log(res);
    //     that.setData({
    //       list: res.data
    //     })

    //   },
    // ),
    //   //获取区域列表
    //   request.getArea(
    //     {//"tid": this.data.cartid
    //     },
    //     (res) => {
    //       this.setData({
    //         areaList: res.data
    //       })

    //     },
    //   )

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    //页面加载的时候的重置数据
    this.setData({

    })
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }

})