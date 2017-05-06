# Serverless Azure Functions Node.js Template with FaunaDB

This starter template allows quickly creating a Node.js-based service to Azure Functions. It relies on the `serverless-azure-functions` plugin, and uses the `faunadb` client library, and therefore, before you can deploy it, you simply need to run `npm install` in order to acquire it (the dependencies are already saved in the `package.json` file).

### Setting up your Azure credentials

Once the `serverless-azure-functions` plugin is installed, it expects to find your Azure credentials via a set of well-known environment variables. These will be used to actually authenticate with your Azure account, so that the Serverless CLI can generate the necessary Azure resources on your behalf when you request a deployment (see below).

The following environment variables must be set, with their respective values:

- *azureSubId* - ID of the Azure subscription you want to create your service within
- *azureServicePrincipalTenantId* - ID of the tenant that your service principal was created within
- *azureServicePrincipalClientId* - ID of the service principal you want to use to authenticate with Azure
- *azureServicePrincipalPassword* - Password of the service principal you want to use to authenticate with Azure

For details on how to create a service principal and/or acquire your Azure account's subscription/tenant ID, refer to the [Azure credentials](https://serverless.com/framework/docs/providers/azure/guide/credentials/) documentation.

### Configuring FaunaDB

Before your code can connect with FaunaDB, you need to provision an access key and put the key's secret into the `serverless.yml` configuration file under the `provider.environment.FAUNADB_SECRET` key.

To get an access key, [sign up for free for FaunaDB](https://fauna.com/sign-up), navigate to the [key creation form on the FaunaDB cloud dashboard](https://dashboard.fauna.com/db/keys) and create a key for the database you want to connect to. In most cases, you should select the "server" role.

The example query in `handler.js` does not depend on any schema or data. [Learn more about FaunaDB's query language](https://fauna.com/tutorials/crud) or see our [CRUD example for Lambda.](https://github.com/fauna/serverless-crud)

### Deploying the service

Once your Azure credentials are set, you can immediately deploy your service via the following command:

```shell
serverless deploy
```

This will create the necessary Azure resources to support the service and events that are defined in your `serverless.yml` file.

### Invoking and inspecting a function

With the service deployed, you can test it's functions using the following command:

```shell
serverless invoke -f hello
```

Additionally, if you'd like to view the logs that a function generates (either via the runtime, or create by your handler by calling `context.log`), you can simply run the following command:

```shell
serverless logs -f hello
```

### Cleaning up

Once you're finished with your service, you can remove all of the generated Azure resources by simply running the following command:

```shell
serverless remove
```

### Issues / Feedback / Feature Requests?

If you have any issues, comments or want to see new features, please file an issue in the project repository:

https://github.com/serverless/serverless-azure-functions
