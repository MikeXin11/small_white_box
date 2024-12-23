// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber:'',
    val:0,
    isActive:false,
    isChecked:false,
    isError:false
    },
  phoneInput(e){
    let phone=e.detail.value;
    if(phone!=''){
      this.setData({
        isActive:true,
        phoneNumber:phone
      })
    }else{
      this.setData({
        isActive:false
      })
    }
  },
  checkedInput(e){
    if(e.detail.value[0]=="yes"){
      this.setData({
        isChecked:true
      })
    }else{
      this.setData({
        isChecked:false
      })
    }
  },
  showModal(e) {
    let isChecked=this.data.isChecked;
    let length=this.data.phoneNumber.length;
    if(!isChecked){
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    }else{
      //如果勾选了，就判断手机号的长度是否是11位
      if(length===11){
        //手机长度是11位数则跳转到获取验证码的界面
        this.setData({
          isError:false
        })
        wx.setStorageSync('phoneNumber', this.data.phoneNumber);
        //模拟手机获取到了验证码
        wx.setStorageSync('code', '1234')
        wx.navigateTo({
          url: '/pages/getCodes/getCodes',
        })
      }else{
        //否则无法获取验证码
        this.setData({
          isError:true
        })
      }
    }
    const action = e.currentTarget.dataset.action;
    if(isChecked&&action==="otherLogin"){
      this.otherLogin();
    }
  },
  otherLogin(){
    wx.showToast({
      title: '当前版本不支持', //提示的内容
      duration: 1000, //持续的时间
      icon: 'error', //图标有success、error、loading、none四种
      mask: true //显示透明蒙层 防止触摸穿透
   })
  },


  toAgree(e) {
    this.setData({
      isChecked:true,
      modalName: null
    })
  },
  toDisAgree(e){
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  toHome(){
    wx.switchTab({
      url: '/pages/home/home',
    })
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