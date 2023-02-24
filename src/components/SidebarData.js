import react from "react";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import CollectionsBookmarkSharpIcon from '@mui/icons-material/CollectionsBookmarkSharp';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardCustomizeIcon/>,
        path: "/Dashboard",
    },
    {
        title: "Home",
        icon: <CottageSharpIcon/>,
        path: "/Home",
    },
    {
        title: "Friends",
        icon: <GroupsSharpIcon/>,
        path: "/Friends",
    },
    {
        title: "Favourites",
        icon: <CollectionsBookmarkSharpIcon/>,
        path: "/Favourites",
    },
    {
        title: "Mail",
        icon: <EmailSharpIcon/>,
        path: "/Mail",
    },
    {
        title: "About us",
        icon: <InfoIcon/>,
        path: "/about us",
    },
    {
        title: "Help",
        icon: <HelpOutlineIcon/>,
        path: "/Help",
    },
];