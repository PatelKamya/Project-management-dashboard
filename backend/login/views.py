from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate
import json

class LoginView:
    def post(self, request):
        data = json.loads(request.body)
        
        username = data.get('username')
        password = data.get('password')
        
