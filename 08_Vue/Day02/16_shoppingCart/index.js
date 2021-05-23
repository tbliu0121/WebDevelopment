const app = new Vue({
  el: "#app",

  data: {
    books:[
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-09",
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: "《Uniex编程艺术》",
        date: "2006-02",
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-09",
        price: 85.00,
        count: 1
      }
    ]
  },

  methods: {
    minus(index) {
      this.books[index].count--;
    },
    add(index) {
      this.books[index].count++;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    }
  },

  filters: {                             //过滤器
    showPrice(price) {
      return "￥" + price.toFixed(2);    //num.toFixed(n)保留n位小数
    }
  },

  computed: {
    totalPrice() {
      // total = 0;
      // for(let book of this.books) {
      //   total += book.price * book.count;
      // }
      // return total;

      //利用reduce()方法计算
      return this.books.reduce(function(preVal, book) {
        return preVal + book.price * book.count;
      }, 0);
    }
  }

})