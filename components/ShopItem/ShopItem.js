// components/ShopItem/ShopItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: '未知'
    },
    stuffType: {
      type: String,
      value: '未知'
    },
    price: {
      type: Number,
      value: 0
    },
    alreadySold: {
      type: Number,
      value: 0
    },
    imageUrl: {
      type: String,
      value: ''
    },
    deviceWidth: {
      type: Number,
      value: 0
    },
    currentNumber: {
      type: Number, 
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCurrentNumber: function (e) {
      let { currentNumber } = this.data;
      this.setData({
        currentNumber: currentNumber + 1
      })
    },
    toDetailPage: function () {
      wx.navigateTo({
        url: '../stuffDetail/stuffDetail',
      })
    }
  }
})
