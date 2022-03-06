const app = new Vue({
  el: "#app_cart",
  data: {
    books: [
      {
        id: 1,
        bookName: "JAVA",
        date: '2020-5',
        price: 150.00,
        count: 1
      },
      {
        id: 2,
        bookName: "Python",
        date: '2020-5',
        price: 200.00,
        count: 1
      },
      {
        id: 3,
        bookName: "AI",
        date: '2020-5',
        price: 80.00,
        count: 1
      },
      {
        id: 4,
        bookName: "人工智障",
        date: '2020-5',
        price: 50.00,
        count: 1
      },
      {
        id: 5,
        bookName: "C语言",
        date: '2020-5',
        price: 90.00,
        count: 1
      },
      {
        id: 6,
        bookName: "C++",
        date: '2020-5',
        price: 90.00,
        count: 1
      },

    ]

  },
  methods: {
    getFinalPrice(price) {
      return "¥" + price.toFixed(2)
    },
    increment(index) {
      console.log("increment,index")
      this.books[index].count++

    },
    decrement(index) {
      console.log("decrement")
      this.books[index].count--

    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }

  },
  // Vue的过滤器
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      // 1.普通的for循环
      // let totalPrice=0
      // for (let i=0; i<this.books.length;i++){
      //   totalPrice+=this.books[i].price*this.books[i].count
      // }
      // return totalPrice

      // 2.for( let i in this.books),i是一个索引值
      // let totalPrice=0
      // for (let i in this.books) {
      //   totalPrice+=this.books[i].price*this.books[i].count
      // }
      // return totalPrice

      // 3.for( let i of this.books),i指的是book
      // let totalPrice = 0
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice

      // 4.reduce
      return this.books.reduce(function (preValue, book) {
        return preValue += book.price * book.count

      }, 0)

    }

  }
})

// 编程范式:面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)
// 高阶函数:filter/map/reduce:函数式编程
// filter函数的使用
// filter的回调函数有一个要求必须返回一个Boolean值
// true:当返回true时.函数内部会自动将这次回调的n加入到新的数组中
// false:当返回false时,函数内部会过滤掉这次的n
// function可以写成箭头函数
const nums = [10, 20, 111, 232, 444, 50]

let totalNum = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(totalNum)
let newNums = nums.filter(function (n) {
  return n < 100
})
console.log(newNums)


// map函数的使用

let new1Nums = newNums.map(function (n) {
  return n * 2
})
console.log(new1Nums)


// reduce函数的使用
// reduce作用是对数组中所有的内容进行汇总
let total = new1Nums.reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(total)














// 1.获取所有小于100的数字
// let new1Num=[]
// for (let n in nums){
//   if(n<100){
//     new1Num.push(n)
//   }
// };

// 2.获取所有小于100的数字*2
// let new2Num=[]
// for (let n in nums){

//     new2Num.push(n*2)

// };

// 3.获取所有小于100的数字相加
// let total=0
// for (let n in new2Num){

//   total+=n;

// };








