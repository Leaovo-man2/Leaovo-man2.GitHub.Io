#点赞
import json
from django.db.models import F
from django.http import JsonResponse
def digg(request):
    print(request.POST)
    article_id = request.POST.get("article_id")
    is_up = json.loads(request.POST.get("is_up")) #字符串的“True”,是一个布尔值
    #点赞人即当前登录人
    user_id = request.user.pk
    obj = models.ArticleUpDown.objects.filter(user_id=user_id, article_id=article_id).first() //过滤，用户对文章做了什么操作； 拿到这个对象。
    response={"state":True} #默认True
    if not obj:
        ard = models.ArticleUpDown.objects.create(user_id=user_id, article_id=article_id,is_up=is_up)
        queryset = models.Article.objects.filter(pk=article_id)
        if is_up:
            queryset.update(up_count=F("up_count")+1)
        else:
            queryset.update(down_count=F("down_count")+1)
    else:
        response["state"] = False        #True表示你已经赞支持过了，False表已经踩过了
        response["handled"] = obj.is_up  #字典再加一个信息；过滤出的obj拿到is_up

    return JsonResponse(response)
