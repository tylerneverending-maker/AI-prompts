from django.shortcuts import render
from .models import Prompt

# Create your views here.
def prompt_list(request):
    prompts = Prompt.objects.all()
    return render(request, 'prompts/prompt_list.html', {'prompts': prompts})