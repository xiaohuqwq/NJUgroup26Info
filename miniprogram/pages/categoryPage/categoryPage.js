// pages/categoryPage/categoryPage.js
const db = wx.cloud.database()
const datacollection=db.collection("news")
Page({

  /**
   * 页面的初始数据
   */

  data: {
    yule: '/images/iconImages/yule.svg',
    keji: '/images/iconImages/科技.svg',
    junshi:'/images/iconImages/军事.svg',
    tiyu:'/images/iconImages/体育.svg',
    guoji:'/images/iconImages/国际.svg',
    youxi:'/images/iconImages/游戏.svg',
    jiankang:'/images/iconImages/健康.svg',
    caijing:'/images/iconImages/财经.svg',
    shizheng:'/images/iconImages/时政要闻.svg',
    qita:'/images/iconImages/其他.svg',
    categoryList:[], 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  // 页面初始化 options为页面跳转所带来的参数
        let that=this //异步请求，所以let一个that
       
        wx.cloud.database().collection("news").limit(10).get({ 
          success(res){       
            that.setData({ //通过setData，将res中的数据存入到imgList数组当中
              imgList:res.data           
            }); 
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

  },
  a:function(e){
    // console.log(e)
    var news_category=e.currentTarget.dataset.news_category;
    wx.navigateTo({
    url: '/pages/categoryDetailPage/categoryDetailPage?news_category='+news_category,
    })
}
})