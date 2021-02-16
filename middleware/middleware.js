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

//获取输入框匹配关键字商品的api
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

//获取tabwarp的api
app.get("/tab-wrap", (req, res) => {
  let tabTitle = [
    "推荐专区",
    "居家生活",
    "服饰鞋包",
    "美食酒水",
    "个户清洁",
    "母婴亲子",
    "运动旅行",
    "数码家电",
    "严选全国"
  ];
  res.send(tabTitle)
});

//分类列表商品的api
//推荐专区0
app.get("/cate_list_0",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身补蛋白，低脂纯牛奶250毫升*24盒",
      good_price:"￥88"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/2ef1049164f5de76f3447c7300f285ed.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"含40%散养鸡蛋，芝士蛋糕 800克",
      good_price:"￥49"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/91b067de134dbd8adbdb12f2eb41ae4d.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"告别啃食尴尬，秘制无骨凤爪 108克",
      good_price:"￥22"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/4f7aebab5f09d1a8bc6b8370de89f6a3.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"名庄金奖加身，西班牙珍藏干红 750毫升",
      good_price:"￥168"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1ab3c543c88de50e3359dbb0b980acfb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"年货好礼，紫衣腰果 500克",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/92e94e03466679f407f7d4c4ccd805df.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"多功能私享按摩椅",
      good_price:"￥2299"
    },
  ]
  res.send(JSON.stringify(goodsList))
})
//居家生活1
app.get("/cate_list_1",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/e6261205a9decc53e71cf78fb5a0b2f6.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"AB面乳胶独立弹簧床垫 升级款",
      good_price:"￥2599"
    },
  ]
  res.end(JSON.stringify(goodsList))
})
//服饰鞋包2
app.get("/cate_list_2",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/1932b62c64c27668334777c97453018b.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"任性百搭王，男式基础修身牛仔裤",
      good_price:"￥99"
    },
  ]
  res.send(JSON.stringify(goodsList))
})
//美食酒水3
app.get("/cate_list_3",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a6194f5a9d43da299743b56e64fcdb38.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"谷物颗粒蔬菜风味牛奶面包 紫米味 1.08千克",
      good_price:"￥54"
    },
  ]
  res.send(JSON.stringify(goodsList))
})
//个护清洁4
app.get("/cate_list_4",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/97305b1171fee96cae1cb290c4c605cd.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"毛躁星人的救星 近0辐射负离子速干吹风机",
      good_price:"￥199"
    },
  ]
  res.send(JSON.stringify(goodsList))
})
//母婴亲子5
app.get("/cate_list_5",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/862cf579e8fea26bf099f03421980bdb.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"治愈寒冬，儿童羊皮毛一体雪地靴 26-35码",
      good_price:"￥129"
    },
  ]
  res.send(JSON.stringify(goodsList))
})
//运动旅行6
app.get("/cate_list_6",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/70e1e0981afc7e9f80b6ac8b50b1834f.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"运动健身吸汗速干毛巾",
      good_price:"￥39"
    },
  ]
  res.send(JSON.stringify(goodsList))
})
//数码家电7
app.get("/cate_list_7",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/cfd770cff815f5ab04dc0d407decdeb9.jpg?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"网易智造无烟便携艾灸盒（APP智能版）",
      good_price:"￥349"
    },
  ]
  res.send(JSON.stringify(goodsList))
})
//严选全国8
app.get("/cate_list_8",(req,res)=>{
  let goodsList = [
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
    {
      good_img:"https://yanxuan-item.nosdn.127.net/a031726467830d252356fce76fc5a71a.png?type=webp&imageView&quality=65&thumbnail=330x330",
      good_title:"藏起四季的香甜 日本玻璃保鲜储物瓶",
      good_price:"￥19.9"
    },
  ]
  res.send(JSON.stringify(goodsList))
})
app.listen(3344, () => {
  console.log("高仿网易严选中间件已经启动 http://localhost:3344");
});
