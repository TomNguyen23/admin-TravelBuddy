const apis = {
    "getPendingApprovals": {
        "urls": "/api/admin/site-approval",
        "method": "GET"
    },
    "forceGetSiteVersionDetails": {
        "urls": "/api/admin/site-approval/",
        "method": "GET"
    },
    "updateSiteVersionDetails": {
        "urls": "/api/admin/site-approval",
        "method": "PUT"
    },
    "getAllSites": {
        "urls": "/api/admin/site-types",
        "method": "GET"
    },
    "getSiteTypeAndServices": {
        "urls": "/api/site-types/:id/services",
        "method": "GET"
    },
    "getAllServiceGroups": {
        "urls": "/api/admin/service-groups",
        "method": "GET"
    },
    "associateServiceGroupToType": {
        "urls": "/api/admin/service-groups/associate-type?id=:serviceGroupId&typeId=:typeId",
        "method": "PUT"
    },
    "detachServiceGroupFromType": {
        "urls": "/api/admin/service-groups/associate-type?id=:serviceGroupId&remove=true&typeId=:typeId",
        "method": "PUT"
    },
    "putSiteType": {
        "urls": "/api/admin/site-types/:id",
        "method": "PUT"
    },
    "newSiteType": {
        "urls": "/api/admin/site-types",
        "method": "POST"
    },
    "aspectsByType": {
        "urls": "/api/site-types/:id/aspects",
        "method": "GET"
    },
    "deleteAspects": {
        "urls": "/api/admin/site-types/aspects",
        "method": "DELETE"
    },
    "addAspects": {
        "urls": "/api/admin/site-types/aspects",
        "method": "POST"
    },

}

export default apis;