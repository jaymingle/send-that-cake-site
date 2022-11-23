
export default {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-home',
      },
      {
        name: 'All Orders',
        url: '/orders',
        icon: 'icon-list',
      },
      {
        name: 'Products',
        url: '',
        icon: 'icon-vector',
        children: [
            {
              name: 'Add Product',
              url: '/add-product',
              icon: 'icon-people'
            },
            {
                name: 'Pending Approval',
                url: '/unapproved',
                icon: 'icon-people'
              },
              {
                name: 'Categories',
                url: '/categories',
                icon: 'icon-people'
              }
          ],
      },
      
      {
        name: 'Categories',
        url: '/cagetories',
        icon: 'icon-calendar',
      },
      {
        name: 'Payments',
        url: '/menus',
        icon: 'icon-bell'
      },
      {
        name: 'Reports',
        url: '/reports',
        icon: 'icon-graph'
      },
      {
        name: 'Payments',
        url: '/payments',
        icon: 'icon-settings'
      },
      {
        name: 'Settings',
        url: '/settings',
        icon: 'icon-star',
      }
      
      
    ],
  };
  