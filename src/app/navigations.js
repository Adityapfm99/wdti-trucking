export const navigations = [
    {
        label: 'Dashboard',
        type: 'label',
    },
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        label: 'Monitoring',
        type: 'label',
    },
    {
        name: 'Monitoring',
        icon: 'monitoring',
        path: '/material/monitoring-vehicle',
        badge: { color: 'secondary' },
        // children: [
        //     {
        //         name: 'Monitoring Vehicle',
        //         path: '/material/monitoring-vehicle',
        //         iconText: 'A',
        //     },
        //     {
        //         name: 'Monitoring Load',
        //         path: '/material/monitoring-load',
        //         iconText: 'B',
        //     },
        //     {
        //         name: 'Monitoring Fuel',
        //         path: '/material/monitoring-fuel',
        //         iconText: 'C',
        //     },
        // ],
    },
   
    {
        label: 'Components',
        type: 'label',
    },
    {
        name: 'Components',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Auto Complete',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Buttons',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Checkbox',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Dialog',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Expansion Panel',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'Form',
                path: '/material/form',
                iconText: 'F',
            },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
    },


    {
        label: 'Master',
        type: 'label',
    },
    {
        name: 'Master',
        icon: 'settings',
        badge: { color: 'secondary' },
        children: [
            {
                name: 'Master Driver',
                path: '/material/master-driver',
                iconText: 'A',
            },
            {
                name: 'Master Vehicle',
                path: '/material/master-vehicle',
                iconText: 'B',
            },
            {
                name: 'Master Supplier',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Sensor',
                path: '/forms/invoice-form',
                iconText: 'C',
            },
        ],
    },
    {
        label: 'Service',
        type: 'label',
    },
    {
        name: 'Service',
        icon: 'build',
        badge: { color: 'secondary' },
        children: [
            {
                name: 'Maintenance Vehicle',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Master Vehicle',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Master Supplier',
                path: '/material/checkbox',
                iconText: 'C',
            },
        ],
    },
    {
        label: 'Report',
        type: 'label',
    },
    {
        name: 'Report',
        icon: 'assignment',
        badge: { color: 'main' },
        children: [
            {
                name: 'Report Driver',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Report vehicle',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Report',
                path: '/material/checkbox',
                iconText: 'C',
            },
        ],
    },
    {
        label: 'Account',
        type: 'label',
    },
    {
        name: 'Account',
        icon: 'vpn_key',
        children: [
            // {
            //     name: 'Sign in',
            //     iconText: 'SI',
            //     path: '/session/signin',
            // },
            // {
            //     name: 'Sign up',
            //     iconText: 'SU',
            //     path: '/session/signup',
            // },
            {
                name: 'Forgot Password',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Error',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },
    
    // {
    //     name: 'Charts',
    //     icon: 'trending_up',

    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         },
    //     ],
    // },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
