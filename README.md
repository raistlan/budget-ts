# budget-ts

budget app service in typescript

# setup

### step one: configure the `.env`

1. check out the `budget-infra` repo
2. copy the `.env.example` in that repo to a `.env` file
3. create a symbolic link between the `.env` in `budget-infra` and the root directory of this repository
    - `ln -s ../budget-infra/.env .env`

I'm doing this because I want to see how messy microservice architecture can get when you're using multiple technology stacks to communicate with eachother. Having a symlink seemed like the least bad of the other options so that we can ensure we have a singular `.env` that is shared across all of the projects during the development process

AI had a decent idea of scripting this and making it a part of something like `dev-setup.bat`:

```bash
#!/bin/bash

# Link .env from infra/
if [ ! -L .env ]; then
  ln -s ../../infra/.env .env
  echo "Linked .env from infra/"
else
  echo ".env already linked"
fi
```

I'm not sure what this looks like when we actually go to deploy the projects -- but I think at that point we'd just end up defining the production `.env` files indvidually for each of the different repositories/services or do some fancy .yaml magic to make sure that everything that's needed is provided. We might be able to actually do fancy yaml magic locally as well but I'm not quite confident in my knowledge there yet and I know this works for now. We'll see!

### step two: `npm run start`
