//使用node包里的express做中间件
let express = require("express");

let app = express();

//设置跨域访问
app.all("*", function(req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  // //允许的header类型
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  // //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // 可以带cookies
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get("/search", (req, res) => {
  let tempGoods = [
    {
      name: "苹果11"
    },
    {
      name: "苹果12"
    },
    {
      name: "帅气的男装"
    },
    {
      name: "美丽的女装"
    }
  ];

  //获取传来的关键字的key值
  const _searchKey = req.query.search_key;
  //通过关键字过滤出商品
  if (_searchKey) {
    let filterGoods = tempGoods.filter(n => {
      return n.name.indexOf(_searchKey) !== -1;
    });
    // console.log(filterGoods);
    //如果没有找到关键字商品
    let resultGoods =
      filterGoods.length > 0 ? filterGoods : { msg: "没有找到结果" };
    res.send(resultGoods);
  }
});

app.listen(3344, () => {
  console.log("高仿网易严选中间件已经启动 http://localhost:3344");
});
