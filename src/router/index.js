/*import { createRouter, createWebHistory } from 'vue-router';

// Import components (ConversationsIndexPage) here



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;*/

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/NewPageRouter.vue'), // Import the NewPageRouter component
    },
    {
      path: '/conversations',
      component: () => import('@/views/ConversationsIndexPage.vue'), // Import the ConversationsIndexPage component
    },
  ],
});

export default router;
