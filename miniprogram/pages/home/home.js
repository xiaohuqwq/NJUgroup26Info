// pages/home.js
const db = wx.cloud.database()
const datacollection=db.collection("news")
Page({
  cardtap:function(e){
    var news_id=e.currentTarget.dataset.news_id;
    wx.navigateTo({
      url: '/pages/detailPage/detailPage?news_id='+news_id,
    })
  },
	data: {
    imgList:[],		///定一个接受数据的数组
  	},
  	onLoad: function (options) {  // 页面初始化 options为页面跳转所带来的参数
    let that=this //异步请求，所以let一个that
   
    wx.cloud.database().collection("news").get({ 
      success(res){       
        that.setData({ //通过setData，将res中的数据存入到imgList数组当中
          imgList:res.data           
        }),
        console.log(imgList.data)   ///打印看一下   
      }
    })
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