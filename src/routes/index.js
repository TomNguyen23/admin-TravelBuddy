import Login from '@/pages/auth/login'
import NotAuthorized from '@/pages/auth/not-authorized'
import Dashboard from '@/pages/Dashboard/Dashboard'

import LoginLayout from '@/layout/auth/login-layout'
import OTPAuth from '@/pages/auth/OTP_auth'
import SiteVerification from '@/pages/SiteApprovals/SiteVerification'
import urls from './urls'
import SiteDetail from '@/pages/SiteApprovals/SiteDetail'
import SiteTypeList from '@/pages/SiteType/SiteTypeList'
import SiteTypeDetail from '@/pages/SiteType/SiteTypeDetail'
import SiteTypeAdd from '@/pages/SiteType/SiteTypeAdd'
import SiteServiceGroupList from '@/pages/SiteServiceGroups/SiteServiceGroupList'
import SiteServiceGroupDetail from '@/pages/SiteServiceGroups/SiteServiceGroupDetail'
import SiteServiceGroupAdd from '@/pages/SiteServiceGroups/SiteServiceGroupAdd'
import SiteService from '@/pages/SiteService/SiteService'

const publicRoutes = [
    {path: '/', element: Login, Layout: LoginLayout},
    {path: '/not-authorized', element: NotAuthorized, Layout: LoginLayout},
    {path: '/OTP', element: OTPAuth, Layout: LoginLayout},
]

const privateRoutes = [
    {path: urls.dashboard, element: Dashboard},
    {path: urls.siteApprovals, element: SiteVerification},
    {path: urls.siteApprovalDetail + ':id', element: SiteDetail},
    {path: urls.allSiteTypes, element: SiteTypeList},
    {path: urls.siteTypeDetail + ':id', element: SiteTypeDetail},
    {path: urls.addSiteType, element: SiteTypeAdd},
    {path: urls.allSiteServiceGroups, element: SiteServiceGroupList},
    {path: urls.addSiteServiceGroup, element: SiteServiceGroupAdd},
    {path: urls.siteServiceGroupDetail + ':id', element: SiteServiceGroupDetail},
    {path: urls.siteServices, element: SiteService}
]

export { publicRoutes, privateRoutes }