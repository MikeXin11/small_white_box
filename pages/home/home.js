// pages/home/home.js
Page({
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },




  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft:0,
    recommend:[
      "全部","热榜","Apex英雄","PC游戏","战地风云5","Wallpaper","盒友杂谈","荒野大镖客","永劫无间","命运2","泰坦陨落","黑神话：悟空"
    ],
    logo:"../../sucai/logo/小白盒logo.png",
    userInfo:[
      {
        userName:"小猪熊不是小棕熊",
        userPicture:"../../sucai/userpicture/user_01.png",
        userGrade:15,
        userTitle:"第一个传",
        userText:"从来没有传家宝的我看到这个活动怒氪800大洋，手感极好！！！😁😁😁",
        userPostPicture:{
          pictureNum:2,
          pictureBase:"../../sucai/userpost/user_01/thumb",
        }
      },

      {
        userName:"栞",
        userPicture:"../../sucai/userpicture/user_02.png",
        userGrade:18,
        userTitle:"发点战地弔图😂👌",
        userText:"硫磺岛最著名防线，多少薯薯被堵死在快乐洞外过。夸张点的六百兵力拿不下快乐洞，那个洞真结实，昨天那一把...",
        userPostPicture:{
          pictureNum:3,
          pictureBase:"../../sucai/userpost/user_02/thumb",
        }
      },


      {
        userName:"呆毛王",
        userPicture:"../../sucai/userpicture/user_03.png",
        userGrade:6,
        userTitle:"战地5！硫磺岛！美菌！0兵力！胜利！",
        userText:"肾上腺素飙升了，薯薯我正战绩，到最后扫掉几个人，算是功不可没吧",
        userPostPicture:{
          pictureNum:2,
          pictureBase:"../../sucai/userpost/user_03/thumb",
        }
      },
    ]
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