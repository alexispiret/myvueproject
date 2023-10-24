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
      component: () => import('@/components/BaseLayout.vue'), // Import the BaseLayout component
    },
    {
      path: '/conversations',
      component: () => import('@/views/ConversationsIndexPage.vue'), // Import the ConversationsIndexPage component
    },
  ],
});

export default router;
