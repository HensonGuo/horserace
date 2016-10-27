var _bigNumdtn = {};
var _smallNumdtn = {};


function getBigNumBMD(id)
{
    var numSprite=_bigNumdtn[id];
    if (numSprite) 
    {
        return numSprite;
    }
    id;
    switch (id) 
    {
        case 1:
        {
            numSprite = new lib.imgBig1();
            break;
        }
        case 2:
        {
            numSprite = new lib.imgBig2();
            break;
        }
        case 3:
        {
            numSprite = new lib.imgBig3();
            break;
        }
        case 4:
        {
            numSprite = new lib.imgBig4();
            break;
        }
        case 5:
        {
            numSprite = new lib.imgBig5();
            break;
        }
        case 6:
        {
            numSprite = new lib.imgBig6();
            break;
        }
        case 7:
        {
            numSprite = new lib.imgBig7();
            break;
        }
        case 8:
        {
            numSprite = new lib.imgBig8();
            break;
        }
        case 9:
        {
            numSprite = new lib.imgBig9();
            break;
        }
        case 10:
        {
            numSprite = new lib.imgBig10();
            break;
        }
    }
    if (numSprite) 
    {
        _bigNumdtn[id] = numSprite;
    }
    return numSprite;
}


function getSmallNumBMD(id)
{
    var numSprite=_smallNumdtn[id];
    if (numSprite) 
    {
        return numSprite;
    }
    switch (id) 
    {
        case 1:
        {
            numSprite = new lib.imgSmall1();
            break;
        }
        case 2:
        {
            numSprite = new lib.imgSmall2();
            break;
        }
        case 3:
        {
            numSprite = new lib.imgSmall3();
            break;
        }
        case 4:
        {
            numSprite = new lib.imgSmall4();
            break;
        }
        case 5:
        {
            numSprite = new lib.imgSmall5();
            break;
        }
        case 6:
        {
            numSprite = new lib.imgSmall6();
            break;
        }
        case 7:
        {
            numSprite = new lib.imgSmall7();
            break;
        }
        case 8:
        {
            numSprite = new lib.imgSmall8();
            break;
        }
        case 9:
        {
            numSprite = new lib.imgSmall9();
            break;
        }
        case 10:
        {
            numSprite = new lib.imgSmall10();
            break;
        }
    }
    if (numSprite) 
    {
        _smallNumdtn[id] = numSprite;
    }
    return numSprite;
}
