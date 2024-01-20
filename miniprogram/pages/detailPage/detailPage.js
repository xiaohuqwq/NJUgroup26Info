// pages/detailPage/detailPage.js

//读取和更新数据库还没写，页面上显示的是本地测试

Page({ 

  /**
   * 页面的初始数据
   */
  data: {
    id:"99",
    author:"null",
    category:"null",
    time:null,
    detail:["陷入爱河的人们仿佛既有了盔甲，也有了软肋。在神经生物学家眼中，这种复杂的情感能够被大脑中多巴胺、催产素等神经递质的...",
    "这项研究于2024年1月12日发表在《细胞》（Cell）子刊《当代生物学》（Current Biology）上，作...",
    "多巴胺（dopamine）是一种由神经元释放并用以传递信息的重要神经递质，与包括大脑奖励系统在内的多个神经通路有关...",
    "“作为人类，对于不同的人，无论是浪漫伴侣还是亲密朋友，我们与之互动的渴望程度都有所区别和选择。这定义了我们的整个社..."],
    title:"《细胞》子刊：问世间情为何物？神经生物学家：多巴胺",
    isCollect:true,
    isLike:true,
    path:"cloud://information-1ggxsb6kb9c06827.696e-information-1ggxsb6kb9c06827-1323855695/news01.jpg",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(options) {
    this.setData({
      id:options.id,
      author:options.author,
      category:options.category,
      detail:options.detail,
      title:options.title,
      path:options.path,
      isCollect:options.isCollect,
      isLike:options.isLike,
      time:options.time,
    })
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
    console.log(this.data)
  },

  pressCollect()
  {
    this.setData({
      isCollect:!this.data.isCollect,
    })
    console.log(this.data)
  },

})