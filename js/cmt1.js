// 从服务器获取信息
var baseUrl = 'http://www.liulongbin.top:3006'
function getLists() {
    $.ajax({
        type: "GET",
        url: baseUrl + '/api/cmtlist',
        success: function (res) {
            if (res.status !== 200) return alert('获取失败')
            // 把获取的列表渲染到页面
            console.log(res);

            let arr = []
            res.data.forEach(function (item) {
                arr.push(`
                <li class="list-group-item">
                <span class="badge" style="background: orange">评论时间：${item.time}</span>
                <span class="badge" style="background: skyblue">评论人：${item.username}</span>
                ${item.content}
                </li>
                `)
            })
            // 遍历完成之后把新的arr数组添加到ul中
            $('.list-group').empty().append(arr.join(''))
        }
    })
}

// 添加评论功能

$('#formAddCmt').on('submit', function (e) {
    e.preventDefault()
    let data = $(this).serialize();
    console.log(data);
    $.ajax({
        type: 'POST',
        url: baseUrl+'/api/addcmt',
        data,
        success: function (res) {
            if (res.status !== 201) {
                return alert("评论发布失败！");
            }

            getLists()
        },
    })
    $(this)[0].reset('')
})










// 调用函数
getLists()