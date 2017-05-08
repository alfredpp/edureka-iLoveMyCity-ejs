exports.home=function(req,res){
  res.render('home',{
    title:'Famous Painters',
    headline:'Beautiful paintings by talented painters.'
  });
}

exports.painter=function(req,res){
    var painterName=req.params.painter;
    var title,heading;
    var imageCount=4;

    if(painterName==='da-vinci'){
       title="Leonardo da Vinci";
       heading="Simplicity is the ultimate sophistication.";
    }
    else if(painterName==='van-gogh'){
       title="Vincent van Gogh";
       heading="I feel that there is nothing more truly artistic than to love people.";
    }
    else if(painterName==='michelangelo'){
       title="Michelangelo";
       heading="Every block of stone has a statue inside it and it is the task of the sculptor to discover it.";
    }

    res.render('painter',{
        title:title,
        headline:heading,
        painter:painterName,
        numberOfImages:imageCount});
  }
