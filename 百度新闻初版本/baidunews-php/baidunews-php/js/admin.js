//打开后台页面的时候发送请求刷新新闻列表
$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();
    //添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        //输入判断
        if ($('#newstitle').val() === '' || $('#newsimg').val() === '' || $('#newstime').val() === '' || $('#newssrc').val() === '') {
            if ($('#newstitle').val() === '') {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === '') {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === '') {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() === '') {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }


        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            //提交添加
            $.ajax({
                url: '../baidunews-php/server/insert.php',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                    $('#newstitle').val('');
                    $('#newstype').val('');
                    $('#newsimg').val('');
                    $('#newstime').val('');
                    $('#newssrc').val('');
                    refreshNews();
                    
                }
            });
        }
    });
    //删除新闻
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();

    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: '../baidunews-php/server/delete.php',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            });
        }
    });
    //修改新闻
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: '../baidunews-php/server/curnews.php',
            type: 'post',
            datatype: 'json',
            data: { newsid: updateId },
            success: function(data) {
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime =data[0].newstime.split(' ')[0];
                $('#unewstime').val(utime);
            }
        });

    });
    $('#updateModal #confirmUpdate').click(function(e) {
         $.ajax({
            url: '../baidunews-php/server/update.php',
            type: 'post',
            datatype: 'json',
            data: { 
                newstitle:$('#unewstitle').val(),
                newstype:$('#unewstype').val(),
                newsimg:$('#unewsimg').val(),
                newstime:$('#unewstime').val(),
                newssrc:$('#unewssrc').val(),
                id:updateId
            },
            success: function(data) {
                $('#updateModal').modal('hide');
                refreshNews();
              
            }
        });
    });






    function refreshNews() {
        // 清空所有新闻
        $newsTable.empty();
        $.ajax({
            url: '../baidunews-php/server/getnews.php',
            type: 'get',
            datatype: 'json',
            success: function(data) {
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newsTable.append($tRow);

                });
            }
        });
    }
});
