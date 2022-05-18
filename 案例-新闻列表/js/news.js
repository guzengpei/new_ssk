// 定义url
const baseUrl = "http://www.liulongbin.top:3006"


// 获取数据函数
const getNewsList = () => {
    $.ajax({
        type: "GET",
        url: baseUrl + '/api/news',
        success: function (res){
            console.log(res);
        }
    })
}


getNewsList()