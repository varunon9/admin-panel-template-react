A service assumes that all prior validations have been taken care of.
It simply interacts with db to get data.

We don't have `catch` block in services because it will be handled by corresponding controller and
generating status code = 500 i.e. Internal Server Error.