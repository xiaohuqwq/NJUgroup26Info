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
    imgList: [],	///定一个接受数据的数组
    pagesize:7,
    pagestart:0,
    page:1
  	},
  onLoad: function (options) {  // 页面初始化 options为页面跳转所带来的参数
    let that=this //异步请求，所以let一个that
    wx.showLoading({
     title: '少女祈祷中',
    })
    wx.cloud.database().collection("news").skip(this.data.pagestart).limit(this.data.pagesize).get({ 
      success(res){  
        let list = that.data.imgList.concat(res.data)     
        that.setData({ //通过setData，将res中的数据存入到imgList数组当中
          imgList:list        
        });
      },
      complete(){
        wx.hideLoading();
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
  onReachBottom: function(){
    if(this.data.pagestart>=126){
      return wx.showToast({
        title: '已全部加载完毕',
        icon:"none"
      })
    }
    wx.showLoading({
      title: '少女祈祷中',
    })
      let that=this 
    this.setData({
      pagestart: this.data.pagestart+7,
    })
    // 异步请求，所以let一个that
    wx.cloud.database().collection("news").skip(that.data.pagestart).limit(that.data.pagesize).get({ 
      success(res){  
        let list = that.data.imgList.concat(res.data)     
        that.setData({ 
          imgList:list          
        });
        console.log("OK")
      },
      complete(){
        wx.hideLoading();
      },
    })
  },
  // onReachBottom:function() {
  //   wx.showLoading({
  //     title: '少女祈祷中',
  //   })
  //   let that=this 
  //   this.setData({
  //     pagestart: this.data.pagestart+7,
  //   })
  //   // 异步请求，所以let一个that
  //   wx.cloud.database().collection("news").skip(that.data.pagestart).limit(that.data.pagesize).get({ 
  //     success(res){  
  //       let list = that.data.imgList.concat(res.data)     
  //       that.setData({ 
  //         imgList:list          
  //       });
  //       console.log("OK")
  //     },
  //     complete(){
  //       wx.hideLoading();
  //     },
  //   })
  //   wx.hideLoading()
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})