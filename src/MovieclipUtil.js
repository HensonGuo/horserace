MovieClipUtil = {};


MovieClipUtil.stopAll = function(obj)
{
    if (!obj) 
        return;
    if (obj instanceof Array)
    {
        for (var i=0; i < obj.length; i++)
        {
            var child = obj[i];
            if (child instanceof createjs.MovieClip)
                child.stop();
            if (child instanceof HorseModel)
                child.view.stop();
        }
        return;
    }
    if (obj instanceof createjs.MovieClip) 
        obj.stop();
    if(obj instanceof createjs.Container)
    {
        var index=0;
        while(index < obj.numChildren) 
        {
            var child = obj.getChildAt(index);
            if (child instanceof createjs.MovieClip) 
            {
                child.stop();
            }
            MovieClipUtil.stopAll(child);
            ++index;
        }
    }
}


MovieClipUtil.playAll = function(obj)
{
    if (!obj) 
        return;
    if (obj instanceof Array)
    {
        for (var i=0; i < obj.length; i++)
        {
            var child = obj[i];
            if (child instanceof createjs.MovieClip)
                child.play();
            if (child instanceof HorseModel)
                child.view.play();
        }
        return;
    }
    if (obj instanceof createjs.MovieClip)
        obj.play()
    if(obj instanceof createjs.Container)
    {
        var index=0;
        while(index < obj.numChildren) 
        {
            var child = obj.getChildAt(index);
            if (child instanceof createjs.MovieClip) 
            {
                child.play();
            }
            MovieClipUtil.playAll(child);
            ++index;
        }
    }
}