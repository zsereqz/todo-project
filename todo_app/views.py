from django.shortcuts import render, redirect
from .models import Tasks
 


def index(request):
    active = Tasks.objects.filter(is_done=False)
    done = Tasks.objects.filter(is_done=True)
    ready_count = Tasks.objects.filter(is_done=False).count()   
    notready_count = Tasks.objects.filter(is_done=True).count() 
    all = ready_count + notready_count
    
    count = {
        'ready': active,
        'notready': done,
        'ready_count': ready_count,
        'notready_count': notready_count,
        'all': all,
    }
    return render(request, 'todo_app/index.html', count)


def add_task(request):
    if request.method == "POST":
        title = request.POST['title']
        Tasks.objects.create(title = title)
    return redirect('main')


def nolong(request):
    if request.method == "POST":
        task_id = request.POST.get('task_id')
        Tasks.objects.filter(id=task_id).update(is_done=True)
            
    return redirect('main')


def long(request):
    if request.method == "POST":
        task_id = request.POST.get('task_id')
        Tasks.objects.filter(id=task_id).update(is_done=False)

    return redirect('main')