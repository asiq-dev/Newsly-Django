from django.shortcuts import render
from django.views.generic import (
    ListView,
    DetailView,
)
from django.views.generic.edit import (
    UpdateView,
    DeleteView,
    CreateView,
)
from django.urls import reverse_lazy
from .models import Article
# Create your views here.


class ArticleListView(ListView):
    model = Article
    template_name = "article_list.html"


class ArticleDetailView(DetailView):
    model = Article
    template_name = "article_detail.html"


class ArticleUpdateView(UpdateView):
    model = Article
    template_name = "article_edit.html"
    fields = [
        "title",
        "body",
    ]


class ArticleDeleteView(DeleteView):
    model = Article
    template_name = "article_delete.html"
    success_url = reverse_lazy("article_list")


class ArticleCreateView(CreateView):
    model = Article
    template_name = "article_create.html"
    fields = [
        "title",
        "body",
        "author",
    ]