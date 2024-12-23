// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber:'',
    rightCode:'',
    timeContent:'',
    currentTime:6,
    isActive:false,
    isError:false
    },
  codeInput(e){
    let code=e.detail.value;
    this.setData({
      isError:false
    });
    if(code.length===4){
      if(code==this.data.rightCode){
        wx.setStorageSync('mainUserInfo', {
          name:"不是你的呆毛",
          picture:"../../sucai/userpicture/usermain.png",
          personalSignature:"点击编辑个人签名",
          grade:8,
          follow:1,
          fans:0,
          collection:3,
          history:"99+",
          loginStatus:true
        })
        wx.switchTab({
          url: '/pages/home/home',
        })
      }else{
        this.setData({
          isError:true
        }) 
      }
    }else if(code.length>4){
      this.setData({
        isError:true
      }) 
    }
  },
  toResend(){
    let ct=6;
    this.setData({
      currentTime:ct,
      isActive:false,
      timeContent:"("+ct+"s)"
    })
    this.timeDown();
  },
  timeDown(){
    let currentTime=this.data.currentTime;
    let timeContent='';
    let intervalId=setInterval(() => {
      if(currentTime>0){
        currentTime--;
        timeContent="("+currentTime+"s)"
      }else{
        timeContent='';
        clearInterval(intervalId);
        this.setData({
          isActive:true
        })
      }
      this.setData({
        timeContent:timeContent,
        currentTime:currentTime
      })
    }, 1000);

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let phoneNum=wx.getStorageSync('phoneNumber')
    let rightCode=wx.getStorageSync('code')
    this.setData({
      phoneNumber:phoneNum,
      rightCode:rightCode
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.timeDown();
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