import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;

  images = [
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
    },
    {
      title: 'lakeside fun in the sun',
      url:
        'https://images.unsplash.com/photo-1605559140495-645d719efbe2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGxha2UlMjBiZWFjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Beautiful Mountain Rainbow',
      url:
        'https://images.unsplash.com/photo-1614845372050-3f6a1c94293c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Seattle at night',
      url:
        'https://images.unsplash.com/photo-1542223616-740d5dff7f56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHlzY2FwZSUyMHNlYXR0bGUlMjBhdCUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'So, so many stars. Beautiful night sky',
      url:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG5pZ2h0JTIwc2t5JTIwc3RhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Awesome!! Norther Light, Juneau, Alaska',
      url:
        'https://images.unsplash.com/photo-1494243762909-b498c7e440a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90aGVybiUyMGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
    },
    {
      title: 'lakeside fun in the sun',
      url:
        'https://images.unsplash.com/photo-1605559140495-645d719efbe2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGxha2UlMjBiZWFjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Beautiful Mountain Rainbow',
      url:
        'https://images.unsplash.com/photo-1614845372050-3f6a1c94293c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Seattle at night',
      url:
        'https://images.unsplash.com/photo-1542223616-740d5dff7f56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHlzY2FwZSUyMHNlYXR0bGUlMjBhdCUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'So, so many stars. Beautiful night sky',
      url:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG5pZ2h0JTIwc2t5JTIwc3RhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Awesome!! Norther Light, Juneau, Alaska',
      url:
        'https://images.unsplash.com/photo-1494243762909-b498c7e440a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90aGVybiUyMGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
    },
    {
      title: 'lakeside fun in the sun',
      url:
        'https://images.unsplash.com/photo-1605559140495-645d719efbe2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGxha2UlMjBiZWFjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Beautiful Mountain Rainbow',
      url:
        'https://images.unsplash.com/photo-1614845372050-3f6a1c94293c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Seattle at night',
      url:
        'https://images.unsplash.com/photo-1542223616-740d5dff7f56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHlzY2FwZSUyMHNlYXR0bGUlMjBhdCUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'So, so many stars. Beautiful night sky',
      url:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG5pZ2h0JTIwc2t5JTIwc3RhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      title: 'Awesome!! Norther Light, Juneau, Alaska',
      url:
        'https://images.unsplash.com/photo-1494243762909-b498c7e440a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90aGVybiUyMGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
