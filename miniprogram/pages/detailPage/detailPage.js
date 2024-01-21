// pages/detailPage/detailPage.js

const db = wx.cloud.database()
const datacollection=db.collection("news")
Page({ 

  /**
   * 页面的初始数据
   */
  data: {
    news_id:'',
    author:"null",
    category:"null",
    time:null,
    detail:[],
    title:"",
    isCollect:false,
    isLike:false,
    path:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      news_id:options.news_id
    })
    // console.log(options)
    // console.log(this.data.news_id)

    let that=this //异步请求，所以let一个that

    datacollection.doc(this.data.news_id).get({
      success(res){
        console.log(res.data)
        that.setData({
          author:res.data.author,
          category:res.data.category,
          detail:res.data.detail,
          title:res.data.title,
          path:res.data.path,
          isCollect:res.data.isCollect,
          isLike:res.data.isLike,
          time:res.data.time,
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(options) {
  
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

  },

  goBack()
  {
    wx.navigateBack({delta:0,})
  },

  pressLike()
  {
    this.setData({
      isLike:!this.data.isLike,
    })
    datacollection.doc(this.data.news_id).update({
      // data 传入需要局部更新的数据
      data: {
        isLike:this.data.isLike
      },
      success: function(res) {
        console.log(res.data)
      }
    })
    console.log(this.data)

    db.collection("meInfo").where({
      category:'likeAuthor'
    }).get({
      success(res){
        console.log(res.data[0])
      }
    })
  },

  pressCollect()
  {
    this.setData({
      isCollect:!this.data.isCollect,
    })
    datacollection.doc(this.data.news_id).update({
      // data 传入需要局部更新的数据
      data: {
        isCollect:this.data.isCollect
      },
      success: function(tmp) {
        console.log(tmp.data)
      }
    })
    console.log(this.data)
  },

})