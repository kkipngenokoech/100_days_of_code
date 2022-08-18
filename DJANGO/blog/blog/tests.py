import email
from turtle import title
from urllib import response
from django.test import TestCase
from django.contrib.auth import get_user_model
from django.test import client, TestCase
from django.urls import reverse
from .models import post


# Create your tests here.
class BlogTests(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username = 'testuser',
            email = 'test@email.com',
            password = 'secret'
        )
        self.post = post.objects.create(
            title = 'A good title',
            body = 'Nice body content',
            author = self.user
        )
        def test_string_representation(self):
            post_it = post(title='A sample title')
            self.assertEqual(str(post_it), post_it.title)
        def test_post_content(self):
            self.assertEqual(f'{self.post_it.title}','A good title')
            self.assertEqual(f'{self.post_it.author}','testuser')
            self.assertEqual(f'{self.post_it.body}','Nice body content')
        def test_post_list_view(self):
            response = self.client.get(reverse('home'))
            self.assertEqual(response.status_code,200)
            self.assertContains(response,'Nice body content')
            self.assertTemplateUsed(response,'home.html')
        def test_post_detail_view(self):
            response = self.client.get('/post/ /')
            no_response = self.client.get('/post/100000/')
            self.assertEqual(response.status_code,200)
            self.assertEqual(no_response.status_code,400)
            self.assertContains(response, 'A good title')
            self.assertTemplateUsed(response, 'post_detail.html')