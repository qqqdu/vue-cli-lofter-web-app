var displayView = function(section,data,callback){ //section-> fill where,className ->canvas div, data  num
    var style = "";
    var attr = "";
    var str = "";
    var ele = '';
    var val = '';
    var pageThis = '';

    if(!data||data.length==0){
      $(section).html("<h3 style='padding:0;margin:0;border:0;line-height:200px;'>待编辑</h3>");
      return;
    }
    if(typeof data==='string')
      data = JSON.parse(data);
    _this.allPage = data.length; //总共页数
    $(section).html('');
    for(var page = 0; page < data.length; page++){ // page 页数
      str = "";
      //page 属性
      styles = data[page]["parameter"];
      
      
      //渲染所有节点
      for(var key_2 in data[page]["element"]){
        style = data[page]["element"][key_2].block;
        attr = data[page]["element"][key_2].attr;
        ele = data[page]["element"][key_2].type;
        if(data[page]["element"][key_2]['text'])
          val = data[page]["element"][key_2]['text'].value;
        str+= "<"+ ele +parseAttr(attr)+"class='dom'" + " style='"+parseCss(style)+"'>" 
                 + _spaceAndEnter(val) +
              "</"+ ele + ">";
         
      }
      $(section).attr("style",parseCss(styles));
      $(section).append(str);  //将str装载进对应的section
      x = $(section).width()/100;
      $(section).css('font-size',x +'px');
      
    }
    callback && callback(attr.class);
  }