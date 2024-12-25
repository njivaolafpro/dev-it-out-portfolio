# 


User `{ email, password, created, active, isAdmin, roleName }` -> 


------------------------------------------------------------------------
SCOPE ( config.ts) -> 
```
const scopes = [
    'FIND_USER'
    'DELETE_USER'
]
```
------------------------------------------------------------------------


const RoleScopeMapping  = {
    ADMIN: [
        'FIND_USER',
        'DELETE_USER'
    ],
    CUSTOMER: [
        'FIND_SELF',
    ],
}


------------------------------------------------------------------------
- authorization-middleware.ts
  - 