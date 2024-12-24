// pages/userSetting/userSetting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userSetting:{
      
    }
  },
  toLogOut(e){
    wx.showModal({
      title: '你确定要退出登录吗', //提示的标题
      success: function(res) {
        if(res.confirm) {
          wx.clearStorageSync() ;
          wx.switchTab({
            url: '/pages/me/me',
          })
        } 
      }
    })
  },
  getUserInfo(){
    let userInfo=wx.getStorageSync('mainUserInfo');
    if(userInfo===""){
      this.setData({
        userSetting:{
          loginStatus:false,
          "versionID":"1.3.345"
        }
      })
    }else{
      this.setData({
        userSetting:userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getUserInfo()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})