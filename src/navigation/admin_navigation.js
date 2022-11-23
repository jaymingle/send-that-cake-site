//here the admin navigation.. so wehre are u using this?..well i dropped it inside the defaultlayout too/check chats
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
        name: 'Cake Vendors',
        url: '',
        icon: 'icon-vector',
        children: [
            {
              name: 'Vendors',
              url: '/vendor',
              icon: 'icon-people'
            },
            {
                name: 'Approve',
                url: '/vendor-approve',
                icon: 'icon-people'
              },
              {
                name: 'Vendor Products',
                url: '/products',
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
        name: '',
        url: '/register',
        icon: 'icon-star',
      }
    ],
  };
  