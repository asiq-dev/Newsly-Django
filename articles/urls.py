from django.urls import path
from .views import (
    ArticleListView,
    ArticleDetailView,
    ArticleUpdateView,
    ArticleDeleteView,
    ArticleCreateView,
)

urlpatterns = [
    path("", ArticleListView.as_view(), name="article_list"),
    path("<int:pk>/", ArticleDetailView.as_view(), name="article_detail"),
    path("create/", ArticleCreateView.as_view(), name="article_create"),
    path("edit/<int:pk>/", ArticleUpdateView.as_view(), name="article_edit"),
    path("delete/<int:pk>/", ArticleDeleteView.as_view(), name="article_delete"),
]
