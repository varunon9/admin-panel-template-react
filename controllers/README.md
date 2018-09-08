A controller's job is to validate the parameters and then interact to service to get data.
It's responsible for generating correct response status code.

All controllers will accept following object-
```
{
  decoded: {}
}
```
here decoded is result by `verifyToken` middleware.