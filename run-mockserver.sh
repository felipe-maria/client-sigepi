#!/bin/bash

# Documentation
# https://github.com/muonsoft/openapi-mock

# Other kind of mocking for consulting
# https://medium.com/letsboot/the-perfect-mock-backend-to-start-with-an-angular-application-3d751d16614f

# downloads an image
docker pull muonsoft/openapi-mock

# runs a docker container with exported port 8080
docker run -p 8080:8080 -v "$(pwd):/var/www" -e "OPENAPI_MOCK_SPECIFICATION_URL=/var/www/sigepi-openapi.yml" --rm muonsoft/openapi-mock

# to test that the server successfully ran
#curl 'http://localhost:8080/'
