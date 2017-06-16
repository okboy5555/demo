var arr = ["a", "m", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var count = {}; //计数数组
var pos = {}; //索引下标数组
//遍历arr，统计每个字母出现次数且记录位置
//使用字母作为索引下标
arr.forEach(
    function(value, index) //value为值 index为下标
    {
        if (count[value]) {
            count[value]++;
            pos[value] = pos[value] + "," + index;
        } else {
            count[value] = 1;
            pos[value] = "" + index;
        }
    }
);
console.log(count);
console.log(pos);
var max = 0; //max为最多出现的次数
var a; //a为出现次数最多的字母
for (i in count) {
    if (count[i] > max) {
        max = count[i];
        for (i in count) {
            if (max == count[i]) {
                a = i;
                console.log("出现次数最多的字母：" + a);
                console.log("出现的总次数:" + max);
                console.log("出现次数最多的这个字母每一个所在的位置:" + pos[a]);
                console.log("");
            }
        }

    }
}
