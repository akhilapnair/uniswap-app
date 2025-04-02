const apis = {
    register: "/auth/verifyuser",
    addProduct: "/uploaditem",
    search: "/search",
    updatePlace: "workplace/update",
    deletePlace: "workplace/delete",
    updatePlaceLogo: "workplace/upload-photo",

    adminLogin: "/admin/login",
    usersAllCount: "/admin/usercount",
    fetchAllUsers:"/admin/users",
    fetchUser:"admin/user/",
    // fev1Fetch: "/admin/fev1",
    smokeInfo: "/admin/smokeinfo",
    fev1Info: "/admin/avgfev1",
    fvcInfo: "/admin/avgfvc",
    ratioInfo: "admin/usersratio",
    fetchAllAdmins: "admin/get-all",
    fetchAdmin: "admin/get-profile",
    updateAdmin: "admin/update",
    registerAdmin: "admin/signup",
    deleteAdmin: "admin/delete",
    adminDetails: "admin/get",
    forgotPass: "admin/password-request-link",
    resetPass: "admin/password-reset",
    updateAdminPhoto: "admin/upload-profile-picture",
    allforcedspirometry:"admin/spireportsdata/",
    breathanalyzer:"admin/bareportsdata/",
    download:"/admin/downloadRecord",

    addEmployee: "admin/employer/add",
    listEmployee: "/admin/employer/list",
    fetchAllOrg: "org/get-all",
    fetchOrgs: "org/list-by-place-admin",
    registerOrg: "org/register",
    updateOrg: "org/update",
    deleteOrg: "org/delete",
    updateOrgLogo: "org/upload-photo",
    
    fetchAllEmp: "employee/get-all",
    registerEmp: "employee/register",
    updateEmp: "employee/update",
    deleteEmp: "employee/delete",
    updateEmpPhoto: "employee/upload-profile-picture",

    fetchAllVisitors: "visitors/get-list",
    deleteVisistor: "visitors/delete",

    fetchAllActivities: "activities/get-all",
    deleteActivity: "activities/delete",

    addNews:"/admin/news/add",
    list:"admin/news/list",
    deleteNews  :"admin/news/delete"
};
    
export default apis;