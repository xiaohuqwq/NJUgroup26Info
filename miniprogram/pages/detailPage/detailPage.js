// pages/detailPage/detailPage.js
const db = wx.cloud.database()
const datacollection=db.collection("news")
Page({ 
  /**
   * 页面的初始数据
   */
  data: {
    news_id:"99",
    meId:"",
    tmpAu:[],
    auth:"",
    isSubscribe:false,
    datalist:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    
    this.setData({
      news_id:options.news_id,
      auth:options.news_author
    })
    let that=this //异步请求，所以let一个that
    
    datacollection.doc(that.data.news_id).get({
      success:function(res){
        that.setData({
          datalist:res.data,
        })
      }
    }) 
    console.log(that.data.datalist.author)
    db.collection("meInfo").where({
      category:"likeAuthor"
    }).get({success:function(res)
    {
      that.setData({
        meId:res.data[0]._id,
        tmpAu:res.data[0].authors,
      })
      that.setData({
        isSubscribe:that.data.tmpAu.indexOf(that.data.auth)!=-1
      })
      console.log(that.data.tmpAu)
      console.log(that.data.tmpAu.indexOf(that.data.datalist.author))
    }})



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

  },

  goBack()
  {
    wx.navigateBack({delta:0,})
    this.setData({
      news_id:"99",
      meId:"",
      tmpAu:[],
      isSubscribe:true,
      datalist:{},
    })
  },

  pressLike()
  {
    var save = this.data.datalist
    console.log(save)
    save.isLike=!save.isLike
    this.setData({
      datalist:save
    })
    datacollection.doc(this.data.news_id).update({
      // data 传入需要局部更新的数据
      data: {
        isLike:this.data.datalist.isLike
      },
    })
  },

  pressCollect()
  {
    var save = this.data.datalist
    save.isCollect=!save.isCollect
    this.setData({
      datalist:save
    })
    datacollection.doc(this.data.news_id).update({
      // data 传入需要局部更新的数据
      data: {
        isCollect:this.data.datalist.isCollect
      },
    })
  },

  Subscribe()
  {
    this.setData({
      isSubscribe:!this.data.isSubscribe
    })
    var tmpA=this.data.tmpAu
    tmpA.push(this.data.datalist.author)
    this.setData({
      tmpAu:tmpA
    })
    db.collection("meInfo").doc(this.data.meId).update({
      // data 传入需要局部更新的数据
      data: {
        authors:tmpA
      },
    })
  },

  cancelSubscribe(){
    this.setData({
      isSubscribe:!this.data.isSubscribe
    })
    var tmpA=this.data.tmpAu
    tmpA.splice(tmpA.indexOf(this.data.datalist.author),1)
    this.setData({
      tmpAu:tmpA
    })
    db.collection("meInfo").doc(this.data.meId).update({
      // data 传入需要局部更新的数据
      data: {
        authors:tmpA
      },
    })
  }

})