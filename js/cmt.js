const baseUrl = 'http://www.liulongbin.top:3006'

const getCommenrList = function () {
    $.ajax({
        type: 'GET',
        url: baseUrl + '/api/cmtlist',
        success: function (res) {
            if (res.status !== 200) return alert('获取失败')
            console.log(res);
            // 渲染数据
            const arr = []

            res.data.forEach(function (item) {
                arr.push(`
                <li class="list-group-item">
                    <span class="badge" style="background: orange">评论时间：${item.time}</span>
                    <span class="badge" style="background: skyblue">评论人：${item.username}</span>
                    ${item.content}
                </li>
                `)
            })

            $('.list-group').empty().append(arr.join(''))
        },

    })
}


// 监听form提交
$('#formAddCmt').submit(function (e) {
    e.preventDefault()
    const data= $(this).serialize()
    // console.log(data);

    $.ajax({
        type:'POST',
        url: baseUrl+'/api/addcmt',
        data,
        success:(res) => {
            if(res.status !== 201) return alert('评论发表失败')
            getCommenrList()
            $(this)[0].reset()
        }
    })
})




// 调用函数
getCommenrList()