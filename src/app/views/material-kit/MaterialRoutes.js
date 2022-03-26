import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';


const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
const AppButton = Loadable(lazy(() => import("./buttons/AppButton")));
const AppIcon = Loadable(lazy(() => import("./icons/AppIcon")));
const AppProgress = Loadable(lazy(() => import("./AppProgress")));
const AppMenu = Loadable(lazy(() => import("./menu/AppMenu")));
const AppCheckbox = Loadable(lazy(() => import("./checkbox/AppCheckbox")));
const AppSwitch = Loadable(lazy(() => import("./switch/AppSwitch")));
const AppRadio = Loadable(lazy(() => import("./radio/AppRadio")));
const AppSlider = Loadable(lazy(() => import("./slider/AppSlider")));
const AppDialog = Loadable(lazy(() => import("./dialog/AppDialog")));
const AppSnackbar = Loadable(lazy(() => import("./snackbar/AppSnackbar")));
const AppAutoComplete = Loadable(lazy(() => import("./auto-complete/AppAutoComplete")));
const AppExpansionPanel = Loadable(lazy(() => import("./expansion-panel/AppExpansionPanel")));
const MonitoringVehicle = Loadable(lazy(() => import("./monitoring-vehicle/AppTable")));
const MonitoringLoad = Loadable(lazy(() => import("./monitoring-load/AppTable")));
const MonitoringFuel = Loadable(lazy(() => import("./monitoring-fuel/AppTable")));
const MasterDriver = Loadable(lazy(() => import("./master-driver/AppTable")));
const MasterVehicle = Loadable(lazy(() => import("./master-vehicle/AppTable")));
const AddDriver = Loadable(lazy(() => import("../material-kit/add-driver/AppForm")));
const AddVehicle = Loadable(lazy(() => import("../material-kit/add-vehicle/AppForm")));
const Invoice = Loadable(lazy(() => import("../forms/invoice-form/InvoiceForm")));
const MasterSupplier = Loadable(lazy(() => import("./master-supplier/AppTable")));
const AddSupplier = Loadable(lazy(() => import("../material-kit/add-supplier/AppForm")));
const AppMap = Loadable(lazy(() => import("../map/MapRoutes")));


const materialRoutes = [
    {
        path: '/material/table',
        element: <AppTable />,
    },
    {
        path: '/material/form',
        element: <AppForm />,
    },
    {
        path: '/material/buttons',
        element: <AppButton />,
    },
    {
        path: '/material/icons',
        element: <AppIcon />,
    },
    {
        path: '/material/progress',
        element: <AppProgress />,
    },
    {
        path: '/material/menu',
        element: <AppMenu />,
    },
    {
        path: '/map',
        element: <AppMap />,
    },
    
    {
        path: '/material/checkbox',
        element: <AppCheckbox />,
    },
    {
        path: '/material/switch',
        element: <AppSwitch />,
    },
    {
        path: '/material/radio',
        element: <AppRadio />,
    },
    {
        path: '/material/slider',
        element: <AppSlider />,
    },
    {
        path: '/material/autocomplete',
        element: <AppAutoComplete />,
    },
    {
        path: '/material/monitoring-vehicle',
        element: <MonitoringVehicle />,
    },
    {
        path: '/material/monitoring-load',
        element: <MonitoringLoad />,
    },
    {
        path: '/material/monitoring-fuel',
        element: <MonitoringFuel />,
    },
    {
        path: '/forms/invoice-form',
        element: <Invoice />,
    },
    {
        path: '/material/master-driver',
        element: <MasterDriver />,
    },
    {
        path: '/material/master-supplier',
        element: <MasterSupplier />,
    },
    {
        path: '/material/master-vehicle',
        element: <MasterVehicle />,
    },
    {
        path: '/material/add-driver',
        element: <AddDriver/>,
    },
    {
        path: '/material/add-vehicle',
        element: <AddVehicle/>,
    },
    {
        path: '/material/add-supplier',
        element: <AddSupplier/>,
    },
    {
        path: '/material/expansion-panel',
        element: <AppExpansionPanel />,
    },
    {
        path: '/material/dialog',
        element: <AppDialog />,
    },
    {
        path: '/material/snackbar',
        element: <AppSnackbar />,
    },
]

export default materialRoutes
