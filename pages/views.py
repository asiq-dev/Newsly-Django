from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
from articles.models import Article

class HomePageView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["latest_article"] = Article.objects.order_by('-date')[:3]
        return context
