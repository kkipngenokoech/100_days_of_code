from django.contrib import admin
from .models import Article, Comment
# Register your models here.
class CommentInLine(admin.TabularInline):# to switch between StackedInline and TabularInline just change the passed parameters.
    model = Comment

class ArticleAdmin(admin.ModelAdmin):
    inlines = [CommentInLine]

admin.site.register(Article,ArticleAdmin)
admin.site.register(Comment)